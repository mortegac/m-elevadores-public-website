/**
 * POST /api/cotizacion
 *
 * Receives quote form submissions, stores them in v2GmailInbox via AppSync,
 * and returns a success/error response. The AppSync endpoint and API key
 * are read server-side — never exposed to the browser.
 *
 * Expected body (JSON):
 *   { nombre, telefono, producto, mensaje? }
 *
 * Returns:
 *   200 { ok: true,  message: "...", id: "..." }
 *   400 { ok: false, message: "..." }
 *   405 { ok: false, message: "..." }
 *   500 { ok: false, message: "..." }
 */

import outputs from "../../amplify_outputs.json";

const APPSYNC_URL = outputs.data.url;
const APPSYNC_API_KEY = outputs.data.api_key;

const ALLOWED_METHODS = ["POST"];
const MAX_FIELD_LENGTH = 1000;

// ─── GraphQL mutation ─────────────────────────────────────────────────────────

const CREATE_INBOX_MUTATION = /* GraphQL */ `
  mutation CreateV2GmailInbox($input: CreateV2GmailInboxInput!) {
    createV2GmailInbox(input: $input) {
      id
      messageId
      threadId
      subject
      fromName
      fromEmail
      bodyText
      snippet
      gmailAccount
      type
      source
      dateSent
      dateStr
      isRead
      hasAttachments
      createdAt
    }
  }
`;

// ─── Helpers ──────────────────────────────────────────────────────────────────

function sanitize(value) {
  if (typeof value !== "string") return "";
  return value.trim().slice(0, MAX_FIELD_LENGTH);
}

function generateId() {
  const timestamp = Date.now().toString(36);
  const random = Math.random().toString(36).slice(2, 9);
  return `wf-${timestamp}-${random}`;
}

function buildInboxInput({ nombre, telefono, producto, mensaje }) {
  const now = new Date();
  const msgId = generateId();
  const productoStr = producto || "No especificado";
  const nombreStr = sanitize(nombre);
  const telefonoStr = sanitize(telefono);
  const mensajeStr = sanitize(mensaje || "");

  const bodyText = [
    `Nombre: ${nombreStr}`,
    `Teléfono: ${telefonoStr}`,
    `Producto: ${productoStr}`,
    mensajeStr ? `Mensaje: ${mensajeStr}` : "",
  ]
    .filter(Boolean)
    .join("\n");

  // Only include GSI key fields when they have a non-empty value
  // (DynamoDB rejects empty strings in secondary index key attributes)
  return {
    messageId: msgId,
    threadId: msgId,
    dateSent: now.toISOString(),
    dateStr: now.toISOString().slice(0, 10),
    gmailAccount: "contacto@melevadores.cl",
    subject: `Cotización web: ${productoStr}`,
    fromName: nombreStr || undefined,
    // fromEmail intentionally omitted — it's a GSI key and cannot be empty string
    bodyText,
    snippet: `${nombreStr} - ${telefonoStr} - ${productoStr}`.slice(0, 200),
    type: "WEB-FORM",
    source: "melevadores.cl",
    isRead: false,
    hasAttachments: false,
    toEmails: ["contacto@melevadores.cl"],
    labels: ["WEB-FORM"],
  };
}

// ─── AppSync call ─────────────────────────────────────────────────────────────

async function storeInAppSync(input) {
  console.log("[cotizacion] Sending to AppSync:", JSON.stringify(input, null, 2));

  const response = await fetch(APPSYNC_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": APPSYNC_API_KEY,
    },
    body: JSON.stringify({
      query: CREATE_INBOX_MUTATION,
      variables: { input },
    }),
  });

  const json = await response.json();
  console.log("[cotizacion] AppSync response status:", response.status);
  console.log("[cotizacion] AppSync response body:", JSON.stringify(json, null, 2));

  if (json.errors && json.errors.length > 0) {
    throw new Error(json.errors[0].message || "AppSync error");
  }

  return json.data?.createV2GmailInbox;
}

// ─── Handler ──────────────────────────────────────────────────────────────────

export default async function handler(req, res) {
  if (!ALLOWED_METHODS.includes(req.method)) {
    return res.status(405).json({ ok: false, message: "Método no permitido." });
  }

  const body = req.body;
  if (!body || typeof body !== "object") {
    return res.status(400).json({ ok: false, message: "Cuerpo inválido." });
  }

  const { nombre, telefono, producto, mensaje } = body;

  if (!nombre || !sanitize(nombre)) {
    return res.status(400).json({ ok: false, message: "El nombre es requerido." });
  }
  if (!telefono || !sanitize(telefono)) {
    return res.status(400).json({ ok: false, message: "El teléfono es requerido." });
  }

  try {
    const input = buildInboxInput({
      nombre: sanitize(nombre),
      telefono: sanitize(telefono),
      producto: sanitize(producto || ""),
      mensaje: sanitize(mensaje || ""),
    });

    const record = await storeInAppSync(input);

    console.log("[cotizacion] ✅ Stored record id:", record?.id);

    return res.status(200).json({
      ok: true,
      message: "¡Formulario enviado! Te contactaremos pronto.",
      id: record?.id || null,
    });
  } catch (err) {
    console.error("[cotizacion] ❌ Error storing record:", err.message);
    return res.status(500).json({
      ok: false,
      message: "No pudimos enviar tu solicitud. Intenta más tarde.",
      error: process.env.NODE_ENV === "development" ? err.message : undefined,
    });
  }
}
