import React, { useState } from "react";
import styled from "styled-components";

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
  background: #0066cc;
  color: #ffffff;
  border-radius: 22px;
  font-family: Quicksand, sans-serif;
  font-size: 16px;
  font-weight: 700;
  border: none;
  cursor: pointer;
  margin-top: 8px;
  transition: background 0.18s;

  &:hover {
    background: #0052a3;
  }
`;

const TrustText = styled.p`
  font-size: 13px;
  color: #605e5c;
  text-align: center;
  margin: 14px 0 0;
`;

// ─── Component ────────────────────────────────────────────────────────────────

export default function CotizacionBanner({ products = [] }) {
  const [nombre, setNombre] = useState("");
  const [telefono, setTelefono] = useState("");
  const [producto, setProducto] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const msg = `Hola, quiero cotizar. Nombre: ${nombre}. Teléfono: ${telefono}. Producto: ${producto || "No especificado"}.`;
    window.open(
      `https://wa.me/56959382761?text=${encodeURIComponent(msg)}`,
      "_blank"
    );
  };

  const photoUrl =
    "https://wa.me/56959382761?text=" +
    encodeURIComponent(
      "Hola, quiero cotizar. Adjunto una foto de mi escalera o hueco de ascensor."
    );

  return (
    <Section aria-label="Cotización exprés">
      <Inner>
        <Grid>
          {/* ── Left column ───────────────────────────────────────────── */}
          <div>
            <Label>Visita y Cotización Gratis</Label>
            <Heading>¿No sabes cuál es el indicado?</Heading>
            <Subtext>
              Envíanos una foto de tu escalera o hueco de ascensor. Te
              confirmamos viabilidad en menos de 24 horas y agendamos visita
              técnica sin costo.
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
                <FieldStack>
                  <FieldWrapper>
                    <FieldLabel htmlFor="cotizacion-nombre">Nombre</FieldLabel>
                    <Input
                      id="cotizacion-nombre"
                      type="text"
                      placeholder="Nombre y apellido"
                      value={nombre}
                      onChange={(e) => setNombre(e.target.value)}
                      required
                    />
                  </FieldWrapper>

                  <FieldWrapper>
                    <FieldLabel htmlFor="cotizacion-telefono">
                      Teléfono / WhatsApp
                    </FieldLabel>
                    <Input
                      id="cotizacion-telefono"
                      type="tel"
                      placeholder="+56 9..."
                      value={telefono}
                      onChange={(e) => setTelefono(e.target.value)}
                      required
                    />
                  </FieldWrapper>

                  <FieldWrapper>
                    <FieldLabel htmlFor="cotizacion-producto">
                      ¿Qué producto te interesa?
                    </FieldLabel>
                    <Select
                      id="cotizacion-producto"
                      value={producto}
                      onChange={(e) => setProducto(e.target.value)}
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
                  </FieldWrapper>
                </FieldStack>

                <SubmitBtn type="submit">Cotizar por WhatsApp</SubmitBtn>
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
