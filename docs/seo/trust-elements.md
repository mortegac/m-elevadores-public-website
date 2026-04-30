# SEO — Elementos de Confianza (Trust Signals)

## Trust Signals Existentes en el Sitio

### Implementados en el código

| Elemento | Slice / Archivo | Estado |
|----------|----------------|--------|
| Copyright desde 1999 | `components/common/footer/index.js` | ✅ Activo |
| Certificación Ley 20.296 MINVU | `components/common/footer/index.js` | ✅ Activo (solo footer) |
| Reseñas de clientes con estrellas | `slices/LandingCustomerReview/index.js` | ✅ Slice disponible |
| TrustPilot widget | `components/common/footer/subComponents/TrustPilot/` | ✅ Integrado en footer |
| Logos de partners/clientes | `slices/LogoList/index.js` | ✅ Slice disponible |
| Métricas animadas (CountUp) | `slices/LandingCountUp/index.js` | ✅ Slice disponible |
| Sección de equipo (Staff) | `slices/Staff/index.js` | ✅ Slice disponible |
| Videos demostrativos | `slices/LandingVideoShowcase/index.js` | ✅ Slice disponible |
| Dirección física + Google Maps | `components/common/footer/subComponents/FooterList/FooterList.jsx` | ✅ Activo |
| Email de contacto visible | `components/common/footer/index.js` | ✅ Activo |

---

## Análisis por Categoría E-E-A-T

### Experience (Experiencia vivida)
- Casos de uso en **Minería** mencionados
- Proyectos en múltiples rangos de presupuesto ($5M–$20M+)
- **Falta:** Portfolio de proyectos con fotos/antes-después

### Expertise (Pericia técnica)
- Certificación Ley 20.296 MINVU declarada
- Terminología técnica correcta (electromovilidad, plataformas salvaescaleras)
- **Falta:** Artículos técnicos, blog, fichas de productos

### Authoritativeness (Autoridad)
- TrustPilot widget en footer
- Reviews de clientes con estrellas
- Logos de marcas/clientes (LogoList)
- **Falta:** Menciones en prensa, awards, asociaciones del sector

### Trustworthiness (Confiabilidad)
- Dirección física en Providencia, Santiago
- Email corporativo (@melevadores.cl)
- Copyright establecido desde 1999
- **Falta:** Política de privacidad visible, RUT empresa, certificados descargables

---

## Trust Signals Recomendados (No implementados)

| Elemento | Impacto SEO | Prioridad |
|----------|-------------|-----------|
| Schema `LocalBusiness` con datos completos | Alto | Crítica |
| Schema `Review` / `AggregateRating` | Alto | Alta |
| Número de teléfono en header (click-to-call) | Medio | Alta |
| Sello/badge Ley 20.296 descargable o visual | Medio | Alta |
| Contador de proyectos realizados | Medio | Alta |
| WhatsApp Business flotante | Alto (conversión) | Alta |
| Página /nosotros con fotos del equipo | Medio | Media |
| Blog técnico con artículos indexables | Alto (SEO largo plazo) | Media |
| Certificados y licencias descargables | Medio | Media |
| Menciones en redes sociales embebidas | Bajo | Baja |

---

## Problemas de Confianza Detectados

1. **EmailJS keys hardcodeados** en slices (visible en bundle del cliente) — riesgo de seguridad
2. **Meta description genérica** — no refleja experiencia ni ubicación
3. **Sin número de teléfono visible** en header ni hero
4. **Sin WhatsApp** — canal clave para clientes en Chile
5. **Sin política de privacidad** visible (GDPR/ley chilena 19.628)
