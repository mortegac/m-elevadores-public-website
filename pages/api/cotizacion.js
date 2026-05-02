/**
 * POST /api/cotizacion
 *
 * Receives quote form submissions and forwards them to the configured
 * upstream CRM/notification API. The real endpoint lives in an env var
 * so it is never exposed to clients.
 *
 * Expected body (JSON):
 *   { nombre, telefono, producto, mensaje? }
 *
 * Returns:
 *   200 { ok: true,  message: "..." }
 *   400 { ok: false, message: "..." }   — validation error
 *   405 { ok: false, message: "..." }   — wrong method
 *   500 { ok: false, message: "..." }   — upstream error
 */

const ALLOWED_METHODS = ["POST"];

const REQUIRED_FIELDS = ["nombre", "telefono"];

const MAX_FIELD_LENGTH = 500;

function sanitize(value) {
  if (typeof value !== "string") return "";
  return value.trim().slice(0, MAX_FIELD_LENGTH);
}

function validateBody(body) {
  const errors = [];

  for (const field of REQUIRED_FIELDS) {
    if (!body[field] || sanitize(body[field]) === "") {
      errors.push(`El campo '${field}' es requerido.`);
    }
  }

  if (body.telefono && !/^[\d\s+\-().]{6,20}$/.test(sanitize(body.telefono))) {
    errors.push("El teléfono no tiene un formato válido.");
  }

  return errors;
}

export default async function handler(req, res) {
  // Method guard
  if (!ALLOWED_METHODS.includes(req.method)) {
    return res
      .status(405)
      .json({ ok: false, message: "Método no permitido." });
  }

  // Body guard
  const body = req.body;
  if (!body || typeof body !== "object") {
    return res
      .status(400)
      .json({ ok: false, message: "El cuerpo de la solicitud no es válido." });
  }

  // Validate
  const errors = validateBody(body);
  if (errors.length > 0) {
    return res.status(400).json({ ok: false, message: errors[0] });
  }

  // Build clean payload
  const payload = {
    nombre: sanitize(body.nombre),
    telefono: sanitize(body.telefono),
    producto: sanitize(body.producto || "No especificado"),
    mensaje: sanitize(body.mensaje || ""),
    origen: "melevadores.cl",
    timestamp: new Date().toISOString(),
  };

  // Forward to upstream API (configured via env var — never exposed to client)
  const upstreamUrl = process.env.COTIZACION_API_URL;

  if (upstreamUrl) {
    try {
      const upstream = await fetch(upstreamUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          ...(process.env.COTIZACION_API_KEY && {
            Authorization: `Bearer ${process.env.COTIZACION_API_KEY}`,
          }),
        },
        body: JSON.stringify(payload),
      });

      if (!upstream.ok) {
        console.error(
          `[cotizacion] upstream error ${upstream.status}:`,
          await upstream.text().catch(() => "")
        );
        return res.status(500).json({
          ok: false,
          message: "No pudimos enviar tu solicitud. Intenta más tarde.",
        });
      }
    } catch (err) {
      console.error("[cotizacion] fetch error:", err.message);
      return res.status(500).json({
        ok: false,
        message: "No pudimos enviar tu solicitud. Intenta más tarde.",
      });
    }
  }

  return res.status(200).json({
    ok: true,
    message: "¡Formulario enviado! Te contactaremos pronto.",
  });
}
