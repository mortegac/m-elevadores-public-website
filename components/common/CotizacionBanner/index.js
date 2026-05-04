import React, { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";

// ─── Styled components ────────────────────────────────────────────────────────

const Section = styled.section`
  background: #243c70;
  padding: 80px 0;
  width: 100%;
`;

const Inner = styled.div`
  max-width: 1136px;
  margin: 0 auto;
  padding: 0 24px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 48px;
  align-items: center;

  @media (max-width: 960px) {
    grid-template-columns: 1fr;
    gap: 40px;
  }
`;

// ─── Left column ─────────────────────────────────────────────────────────────

const Label = styled.p`
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 2px;
  && {
    color: rgba(255, 255, 255, 0.7);
  }
  text-transform: uppercase;
  margin: 0 0 16px;
`;

const Heading = styled.h2`
  font-family: Quicksand, sans-serif;
  font-size: 40px;
  font-weight: 800;
  line-height: 48px;
  && {
    color: #ffffff;
  }
  margin: 0 0 20px;

  @media (max-width: 960px) {
    font-size: 30px;
    line-height: 38px;
  }
`;

const Subtext = styled.p`
  font-size: 16px;
  line-height: 1.6;
  && {
    color: rgba(255, 255, 255, 0.85);
  }
  margin: 0 0 32px;
`;

const ButtonsRow = styled.div`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
`;

const BtnWhite = styled.a`
  display: inline-flex;
  align-items: center;
  height: 48px;
  padding: 0 28px;
  border-radius: 22px;
  background: #ffffff;
  color: #0066cc;
  font-family: Quicksand, sans-serif;
  font-size: 15px;
  font-weight: 700;
  text-decoration: none;
  border: none;
  cursor: pointer;
  transition: background 0.18s, color 0.18s;
  white-space: nowrap;

  &:hover {
    background: #f0f4ff;
  }
`;

const BtnOutline = styled.a`
  display: inline-flex;
  align-items: center;
  height: 48px;
  padding: 0 28px;
  border-radius: 22px;
  background: transparent;
  border: 2px solid rgba(255, 255, 255, 0.7);
  color: #ffffff;
  font-family: Quicksand, sans-serif;
  font-size: 15px;
  font-weight: 700;
  text-decoration: none;
  cursor: pointer;
  transition: background 0.18s, border-color 0.18s;
  white-space: nowrap;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    border-color: #ffffff;
  }
`;

// ─── Right column — card ──────────────────────────────────────────────────────

const Card = styled.div`
  background: #ffffff;
  border-radius: 20px;
  padding: 36px;
  box-shadow: 0 8px 40px rgba(0, 17, 51, 0.18);
`;

const CardTitle = styled.h3`
  font-family: Quicksand, sans-serif;
  font-size: 22px;
  font-weight: 700;
  color: #001133;
  margin: 0 0 6px;
`;

const CardSubtitle = styled.p`
  font-size: 14px;
  color: #605e5c;
  margin: 0 0 24px;
`;

const FieldStack = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const FieldWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const FieldLabel = styled.label`
  font-size: 14px;
  font-weight: 600;
  color: #323130;
  margin-bottom: 6px;
  display: block;
`;

const inputStyles = `
  width: 100%;
  height: 48px;
  border: 1.5px solid #e2e8f0;
  border-radius: 8px;
  padding: 0 14px;
  font-size: 15px;
  font-family: Quicksand, sans-serif;
  color: #001133;
  outline: none;
  box-sizing: border-box;
  transition: border-color 0.18s;
  background: #ffffff;

  &:focus {
    border-color: #0066cc;
  }
`;

const Input = styled.input`
  ${inputStyles}
`;

const Select = styled.select`
  ${inputStyles}
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%23605E5C' stroke-width='2'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 14px center;
  padding-right: 40px;
  cursor: pointer;
`;

const SubmitBtn = styled.button`
  width: 100%;
  height: 52px;
  background: ${({ disabled }) => (disabled ? "#94b8e0" : "#0066cc")};
  color: #ffffff;
  border-radius: 22px;
  font-family: Quicksand, sans-serif;
  font-size: 16px;
  font-weight: 700;
  border: none;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  margin-top: 8px;
  transition: background 0.18s;

  &:hover:not(:disabled) {
    background: #0052a3;
  }
`;

const TrustText = styled.p`
  font-size: 13px;
  color: #605e5c;
  text-align: center;
  margin: 14px 0 0;
`;

const FieldError = styled.span`
  font-size: 12px;
  color: #e53935;
  font-family: Quicksand, sans-serif;
  margin-top: 4px;
  display: block;
`;

const PhoneInputGlobal = createGlobalStyle`
  .PhoneInput {
    display: flex;
    align-items: center;
    gap: 8px;
    width: 100%;
    height: 48px;
    border: 1.5px solid #e2e8f0;
    border-radius: 8px;
    padding: 0 14px;
    background: #ffffff;
    box-sizing: border-box;
    transition: border-color 0.18s;
  }
  .PhoneInput:focus-within {
    border-color: #0066cc;
    outline: none;
  }
  .PhoneInputCountry {
    display: flex;
    align-items: center;
    gap: 4px;
    flex-shrink: 0;
  }
  .PhoneInputCountrySelect {
    border: none;
    background: transparent;
    font-family: Quicksand, sans-serif;
    font-size: 14px;
    cursor: pointer;
    outline: none;
    padding: 0 4px 0 0;
    appearance: none;
    -webkit-appearance: none;
    color: #323130;
  }
  .PhoneInputCountryIcon {
    width: 24px;
    height: 18px;
    overflow: hidden;
    flex-shrink: 0;
    display: flex;
    align-items: center;
  }
  .PhoneInputCountryIcon--square {
    width: 20px;
    height: 20px;
  }
  .PhoneInputCountryIconImg {
    display: block;
    width: 100%;
    height: auto;
  }
  .PhoneInputCountrySelectArrow {
    display: block;
    width: 0;
    height: 0;
    border-left: 4px solid transparent;
    border-right: 4px solid transparent;
    border-top: 5px solid #605e5c;
    margin-left: 2px;
    flex-shrink: 0;
  }
  .PhoneInputInput {
    flex: 1;
    border: none;
    outline: none;
    font-family: Quicksand, sans-serif;
    font-size: 15px;
    color: #323130;
    background: transparent;
    height: 100%;
    min-width: 0;
  }
  .PhoneInputInput::placeholder {
    color: #a19f9d;
  }
  .PhoneInput--focus {
    border-color: #0066cc;
  }
`;

const PhoneInputError = styled.div`
  .PhoneInput {
    border-color: #e53935 !important;
  }
`;

const StatusBanner = styled.div`
  padding: 12px 16px;
  border-radius: 8px;
  font-size: 14px;
  font-family: Quicksand, sans-serif;
  font-weight: 600;
  margin-bottom: 12px;
  background: ${({ type }) => (type === "success" ? "#e8f5e9" : "#ffebee")};
  color: ${({ type }) => (type === "success" ? "#2e7d32" : "#c62828")};
  border: 1px solid ${({ type }) => (type === "success" ? "#a5d6a7" : "#ef9a9a")};
`;

// ─── Validation ───────────────────────────────────────────────────────────────

function validateFields({ nombre, email, telefono, producto }) {
  const errors = {};
  if (!nombre.trim()) errors.nombre = "El nombre es requerido.";
  if (!email.trim()) {
    errors.email = "El email es requerido.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
    errors.email = "Ingresa un email válido.";
  }
  if (!telefono) {
    errors.telefono = "El teléfono es requerido.";
  } else if (!isValidPhoneNumber(telefono)) {
    errors.telefono = "Ingresa un número de teléfono válido.";
  }
  if (!producto) errors.producto = "Selecciona un producto.";
  return errors;
}

// ─── Component ────────────────────────────────────────────────────────────────

export default function CotizacionBanner({ products = [] }) {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [telefono, setTelefono] = useState("");
  const [producto, setProducto] = useState("");
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null); // null | 'success' | 'error'
  const [statusMessage, setStatusMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("[CotizacionBanner] Submit iniciado", { nombre, email, telefono, producto });

    // Client-side validation
    const fieldErrors = validateFields({ nombre, email, telefono, producto });
    if (Object.keys(fieldErrors).length > 0) {
      console.log("[CotizacionBanner] Errores de validación:", fieldErrors);
      setErrors(fieldErrors);
      setStatus(null);
      return;
    }

    setErrors({});
    setLoading(true);
    setStatus(null);
    setStatusMessage("");

    const payload = { nombre: nombre.trim(), email: email.trim(), telefono: telefono.trim(), producto };
    console.log("[CotizacionBanner] Enviando payload a /api/cotizacion:", payload);

    try {
      const res = await fetch("/api/cotizacion", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      console.log("[CotizacionBanner] Respuesta HTTP status:", res.status);

      const data = await res.json();
      console.log("[CotizacionBanner] Respuesta JSON:", data);

      if (res.ok && data.ok) {
        setStatus("success");
        setStatusMessage(data.message || "¡Formulario enviado! Te contactaremos pronto.");
        setNombre("");
        setEmail("");
        setTelefono("");
        setProducto("");
        console.log("[CotizacionBanner] ✅ Éxito:", data.message);
      } else {
        setStatus("error");
        setStatusMessage(data.message || "Ocurrió un error. Intenta de nuevo.");
        console.error("[CotizacionBanner] ❌ Error de API:", data.message);
      }
    } catch (err) {
      console.error("[CotizacionBanner] ❌ Error de red:", err.message);
      setStatus("error");
      setStatusMessage("No pudimos conectarnos al servidor. Intenta más tarde.");
    } finally {
      setLoading(false);
      console.log("[CotizacionBanner] Submit finalizado, loading=false");
    }
  };

  const photoUrl =
    "https://wa.me/56959382761?text=" +
    encodeURIComponent(
      "Hola, quiero cotizar. Adjunto una foto de mi escalera o hueco de ascensor."
    );

  return (
    <Section aria-label="Cotización exprés">
      <PhoneInputGlobal hasError={!!errors.telefono} />
      <Inner>
        <Grid>
          {/* ── Left column ───────────────────────────────────────────── */}
          <div>
            <Label>Visita y Cotización Gratis</Label>
            <Heading>¿No sabes cuál es el indicado?</Heading>
            <Subtext>
              Envíanos una foto de tu escalera o hueco de ascensor. Te
              confirmamos viabilidad en menos de 24 horas y agendamos visita
              técnica sin costo dependiendo de la región en donde te encuentres.
            </Subtext>
            <ButtonsRow>
              <BtnWhite
                href={photoUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Enviar foto y cotizar
              </BtnWhite>
              <BtnOutline
                href="https://wa.me/56959382761?text=Hola%2C%20quiero%20cotizar"
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp directo
              </BtnOutline>
            </ButtonsRow>
          </div>

          {/* ── Right column — form card ───────────────────────────────── */}
          <div>
            <Card>
              <CardTitle>Cotización exprés</CardTitle>
              <CardSubtitle>Te respondemos el mismo día hábil.</CardSubtitle>

              <form onSubmit={handleSubmit} noValidate>
                {status && (
                  <StatusBanner type={status}>{statusMessage}</StatusBanner>
                )}

                <FieldStack>
                  <FieldWrapper>
                    <FieldLabel htmlFor="cotizacion-nombre">Nombre</FieldLabel>
                    <Input
                      id="cotizacion-nombre"
                      type="text"
                      placeholder="Nombre y apellido"
                      value={nombre}
                      onChange={(e) => { setNombre(e.target.value); setErrors((p) => ({ ...p, nombre: undefined })); }}
                      style={errors.nombre ? { borderColor: "#e53935" } : {}}
                      disabled={loading}
                    />
                    {errors.nombre && <FieldError>{errors.nombre}</FieldError>}
                  </FieldWrapper>

                  <FieldWrapper>
                    <FieldLabel htmlFor="cotizacion-email">Email</FieldLabel>
                    <Input
                      id="cotizacion-email"
                      type="email"
                      placeholder="tu@email.com"
                      value={email}
                      onChange={(e) => { setEmail(e.target.value); setErrors((p) => ({ ...p, email: undefined })); }}
                      style={errors.email ? { borderColor: "#e53935" } : {}}
                      disabled={loading}
                    />
                    {errors.email && <FieldError>{errors.email}</FieldError>}
                  </FieldWrapper>

                  <FieldWrapper>
                    <FieldLabel htmlFor="cotizacion-telefono">
                      Teléfono / WhatsApp
                    </FieldLabel>
                    <PhoneInputError style={errors.telefono ? {} : { display: "contents" }}>
                      <PhoneInput
                        id="cotizacion-telefono"
                        defaultCountry="CL"
                        value={telefono}
                        onChange={(value) => {
                          setTelefono(value || "");
                          setErrors((p) => ({ ...p, telefono: undefined }));
                        }}
                        placeholder="+56 9 1234 5678"
                        disabled={loading}
                        international
                        countryCallingCodeEditable={false}
                      />
                    </PhoneInputError>
                    {errors.telefono && <FieldError>{errors.telefono}</FieldError>}
                  </FieldWrapper>

                  <FieldWrapper>
                    <FieldLabel htmlFor="cotizacion-producto">
                      Servicio requerido
                    </FieldLabel>
                    <Select
                      id="cotizacion-producto"
                      value={producto}
                      onChange={(e) => { setProducto(e.target.value); setErrors((p) => ({ ...p, producto: undefined })); }}
                      style={errors.producto ? { borderColor: "#e53935" } : {}}
                      disabled={loading}
                    >
                      <option value="">Selecciona un producto</option>
                      {products.map((p) => (
                        <option key={p.slug} value={p.name}>
                          {p.name}
                        </option>
                      ))}
                      <option value="No estoy seguro/a">
                        No estoy seguro/a
                      </option>
                    </Select>
                    {errors.producto && <FieldError>{errors.producto}</FieldError>}
                  </FieldWrapper>
                </FieldStack>

                <SubmitBtn type="submit" disabled={loading}>
                  {loading ? "Enviando..." : "Recibir cotización"}
                </SubmitBtn>
              </form>

              <TrustText>
                ✓ Visita técnica gratis · ✓ Sin compromiso
              </TrustText>
            </Card>
          </div>
        </Grid>
      </Inner>
    </Section>
  );
}
