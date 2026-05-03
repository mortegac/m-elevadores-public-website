/**
 * POST /api/cotizacion
 *
 * Receives quote form submissions, upserts a v2Customer record (create or
 * update by email), then creates a v2GmailInbox record linked to that customer.
 * Both AppSync operations use the API key auth mode — no Cognito session needed.
 *
 * Expected body (JSON):
 *   { nombre, email, telefono, producto, mensaje? }
 *
 * Returns:
 *   200 { ok: true,  message: "...", id: "...", customerId: "..." }
 *   400 { ok: false, message: "..." }
 *   405 { ok: false, message: "..." }
 *   500 { ok: false, message: "..." }
 */

import outputs from "../../amplify_outputs.json";

// Prefer env vars; fall back to amplify_outputs.json so local dev works without .env.local
const APPSYNC_URL     = process.env.APPSYNC_URL     || outputs.data.url;
const APPSYNC_API_KEY = process.env.APPSYNC_API_KEY || outputs.data.api_key;

const ALLOWED_METHODS = ["POST"];
const MAX_FIELD_LENGTH = 1000;

// ─── GraphQL operations ───────────────────────────────────────────────────────

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

const FIND_CUSTOMER_BY_EMAIL = /* GraphQL */ `
  query ListV2Customers($filter: ModelV2CustomerFilterInput) {
    listV2Customers(filter: $filter) {
      items {
        id
        name
        email
        phone
        status
      }
    }
  }
`;

const CREATE_CUSTOMER = /* GraphQL */ `
  mutation CreateV2Customer($input: CreateV2CustomerInput!) {
    createV2Customer(input: $input) {
      id
      name
      email
      phone
      status
      createdAt
    }
  }
`;

const UPDATE_CUSTOMER = /* GraphQL */ `
  mutation UpdateV2Customer($input: UpdateV2CustomerInput!) {
    updateV2Customer(input: $input) {
      id
      name
      email
      phone
      status
      updatedAt
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

// ─── Generic AppSync caller ───────────────────────────────────────────────────

async function appsync(query, variables) {
  console.log("[cotizacion] AppSync request:", query.trim().split("\n")[0], JSON.stringify(variables));
  const res = await fetch(APPSYNC_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": APPSYNC_API_KEY,
    },
    body: JSON.stringify({ query, variables }),
  });
  const json = await res.json();
  console.log("[cotizacion] AppSync response:", JSON.stringify(json));
  if (json.errors?.length > 0) throw new Error(json.errors[0].message);
  return json.data;
}

// ─── Customer upsert ──────────────────────────────────────────────────────────

async function upsertCustomer({ nombre, email, telefono }) {
  console.log("[cotizacion] Looking up customer by email:", email);

  const listData = await appsync(FIND_CUSTOMER_BY_EMAIL, {
    filter: { email: { eq: email } },
  });

  const existing = listData?.listV2Customers?.items?.[0];

  if (existing) {
    console.log("[cotizacion] Customer found, updating:", existing.id);
    const updateData = await appsync(UPDATE_CUSTOMER, {
      input: {
        id: existing.id,
        name: nombre,
        phone: telefono,
        status: existing.status || "lead",
      },
    });
    return updateData?.updateV2Customer;
  } else {
    console.log("[cotizacion] Customer not found, creating new");
    const createData = await appsync(CREATE_CUSTOMER, {
      input: {
        name: nombre,
        email: email,
        phone: telefono,
        status: "lead",
        requestDate: new Date().toISOString().slice(0, 10),
      },
    });
    return createData?.createV2Customer;
  }
}

// ─── Inbox input builder ──────────────────────────────────────────────────────

function buildInboxInput({ nombre, email, telefono, producto, customerId }) {
  const now = new Date();
  const msgId = generateId();
  const productoStr = producto || "No especificado";
  const nombreStr = sanitize(nombre);
  const emailStr = sanitize(email || "");
  const telefonoStr = sanitize(telefono);

  const bodyText = [
    `Nombre: ${nombreStr}`,
    `Email: ${emailStr}`,
    `Teléfono: ${telefonoStr}`,
    `Servicio: ${productoStr}`,
  ]
    .filter(Boolean)
    .join("\n");

  return {
    messageId: msgId,
    threadId: msgId,
    dateSent: now.toISOString(),
    dateStr: now.toISOString().slice(0, 10),
    gmailAccount: "contacto@melevadores.cl",
    subject: `Cotización web: ${productoStr}`,
    fromName: nombreStr || undefined,
    // fromEmail omitted — GSI key, DynamoDB rejects empty strings
    bodyText,
    snippet: `${nombreStr} - ${emailStr} - ${productoStr}`.slice(0, 200),
    type: "PAGINA-WEB",
    source: "melevadores.cl",
    isRead: false,
    hasAttachments: false,
    toEmails: ["contacto@melevadores.cl"],
    labels: ["PAGINA-WEB"],
    ...(customerId && { customerId }),
  };
}

// ─── EmailJS (server-side REST API call) ─────────────────────────────────────

const EMAILJS_SERVICE     = process.env.EMAILJS_SERVICE_ID  || "service_q11ht56";
const EMAILJS_TEMPLATE    = process.env.EMAILJS_TEMPLATE_ID || "template_wn0oacf";
const EMAILJS_USER        = process.env.EMAILJS_USER_ID     || "qn8t4Q--1S8ntkmL4";
const EMAILJS_PRIVATE_KEY = process.env.EMAILJS_PRIVATE_KEY || "";

async function sendEmailJS({ customer, inbox, producto }) {
  const templateParams = {
    to_name:     "M-Elevadores",
    from_name:   customer.name  || "",
    from_email:  customer.email || "",
    phone:       customer.phone || "",
    service:     producto        || "No especificado",
    message_id:  inbox?.id       || "",
    customer_id: customer.id     || "",
    reply_to:    customer.email  || "",
  };

  console.log("[cotizacion] Sending EmailJS:", EMAILJS_SERVICE, EMAILJS_TEMPLATE, templateParams);

  const res = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      service_id:      EMAILJS_SERVICE,
      template_id:     EMAILJS_TEMPLATE,
      user_id:         EMAILJS_USER,
      ...(EMAILJS_PRIVATE_KEY && { accessToken: EMAILJS_PRIVATE_KEY }),
      template_params: templateParams,
    }),
  });

  const text = await res.text();
  console.log("[cotizacion] EmailJS response:", res.status, text);

  if (!res.ok) {
    // Non-blocking — log but don't fail the request
    console.error("[cotizacion] EmailJS error:", res.status, text);
  }
  return res.ok;
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

  const { nombre, email, telefono, producto, mensaje } = body;

  if (!nombre || !sanitize(nombre)) {
    return res.status(400).json({ ok: false, message: "El nombre es requerido." });
  }
  if (!email || !sanitize(email)) {
    return res.status(400).json({ ok: false, message: "El email es requerido." });
  }
  if (!telefono || !sanitize(telefono)) {
    return res.status(400).json({ ok: false, message: "El teléfono es requerido." });
  }

  const cleanNombre = sanitize(nombre);
  const cleanEmail = sanitize(email).toLowerCase();
  const cleanTelefono = sanitize(telefono);
  const cleanProducto = sanitize(producto || "No especificado");

  try {
    // Step 1: Create or update customer
    console.log("[cotizacion] Step 1: Upsert customer");
    const customer = await upsertCustomer({
      nombre: cleanNombre,
      email: cleanEmail,
      telefono: cleanTelefono,
    });
    console.log("[cotizacion] Customer result:", customer?.id, customer?.email);

    // Step 2: Create inbox message linked to customer
    console.log("[cotizacion] Step 2: Create inbox message");
    const input = buildInboxInput({
      nombre: cleanNombre,
      email: cleanEmail,
      telefono: cleanTelefono,
      producto: cleanProducto,
      customerId: customer?.id || undefined,
    });

    const data = await appsync(CREATE_INBOX_MUTATION, { input });
    const record = data?.createV2GmailInbox;
    console.log("[cotizacion] Inbox record created:", record?.id);

    // Step 3: Send notification email via EmailJS (non-blocking — won't fail the response)
    console.log("[cotizacion] Step 3: Send EmailJS notification");
    sendEmailJS({
      customer: {
        id:    customer?.id    || "",
        name:  customer?.name  || cleanNombre,
        email: customer?.email || cleanEmail,
        phone: customer?.phone || cleanTelefono,
      },
      inbox:    record,
      producto: cleanProducto,
    }).catch((err) => console.error("[cotizacion] EmailJS send error:", err.message));

    return res.status(200).json({
      ok: true,
      message: "¡Formulario enviado! Te contactaremos pronto.",
      id: record?.id || null,
      customerId: customer?.id || null,
    });
  } catch (err) {
    console.error("[cotizacion] Error:", err.message);
    return res.status(500).json({
      ok: false,
      message: "No pudimos enviar tu solicitud. Intenta más tarde.",
      error: process.env.NODE_ENV === "development" ? err.message : undefined,
    });
  }
}
