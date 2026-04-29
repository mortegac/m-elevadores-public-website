# SEO — Tweaks Interactivos Recomendados

## Elementos Interactivos Actuales

| Elemento | Implementación | Archivo |
|----------|---------------|---------|
| Formulario principal (landing) | EmailJS + React Hook Form | `slices/LandingBanner/index.js` |
| Formulario "te contactamos" | EmailJS + React Hook Form | `slices/LandingCallbackForm/index.js` |
| Formulario de contacto avanzado | EmailJS + campos condicionales | `components/slices/Contact/variants/default/default.js` |
| Carrusel de reseñas | React Slick (autoplay 4s) | `slices/LandingCustomerReview/index.js` |
| FAQ accordion | Framer Motion (height animation) | `slices/LandingFaq/index.js` |
| Contador animado | React CountUp + IntersectionObserver | `slices/LandingCountUp/index.js` |
| Videos | HTML5 `<video>` nativo con controls | `slices/LandingVideoShowcase/index.js` |
| Timeline de pasos | Responsive horizontal/vertical | `slices/LandingTimeline/index.js` |
| Menú mobile | Hamburger con SVG animado | `components/common/Header/Header.js` |
| Carrusel de logos | Auto-rotate 3s, 5 logos desktop | `slices/LogoList/index.js` |

---

## Tweaks de Mejora — Elementos Existentes

### 1. Formulario de contacto → Agregar campo de WhatsApp / Teléfono preferido
**Archivo:** `components/slices/Contact/variants/default/default.js`
- Añadir opción "Prefiero que me contacten por: Email / WhatsApp / Teléfono"
- Aumenta tasa de respuesta y conversión

### 2. FAQ Accordion → Implementar Schema FAQPage
**Archivo:** `slices/LandingFaq/index.js`
- Agregar `application/ld+json` con `FAQPage` schema
- Beneficio: Citabilidad en AI Overviews (ChatGPT, Perplexity, Google AI)
- **Nota:** No aporta rich results en Google para sitios comerciales (restricción ago 2023), pero sí para LLMs

### 3. Video Showcase → Añadir poster image y lazy loading
**Archivo:** `slices/LandingVideoShowcase/index.js`
- Agregar atributo `poster` a `<video>` (imagen previa visible)
- Agregar `loading="lazy"` para no bloquear LCP
- Beneficio: Core Web Vitals (LCP, INP)

### 4. CountUp → Schema AggregateRating vinculado
**Archivo:** `slices/LandingCountUp/index.js`
- Cuando el contador muestra años de experiencia o proyectos, vincular con schema `Organization`
- Refuerza E-E-A-T en búsquedas

### 5. LogoList → Agregar alt text con nombres de marcas
**Archivo:** `slices/LogoList/index.js`
- Los logos de partners deben tener `alt="[Nombre de marca] — partner certificado M-Elevadores"`
- Beneficio: indexación de nombres de marcas asociadas

### 6. Header → Agregar número de teléfono click-to-call
**Archivo:** `components/common/Header/Header.js`
- Agregar `<a href="tel:+56XXXXXXXXX">` visible en desktop
- Beneficio directo en conversión y señal Local SEO

---

## Tweaks Nuevos — Elementos a Crear

### PRIORIDAD ALTA

#### A. Widget flotante de WhatsApp
- Botón fijo bottom-right: `<a href="https://wa.me/56XXXXXXXXX">`
- Mensaje predefinido: "Hola, quiero cotizar un ascensor"
- Impacto: Conversión inmediata, canal preferido en Chile

#### B. Calculadora interactiva de presupuesto
- Nuevo slice: `LandingCalculator`
- Inputs: Número de pisos, tipo de edificio (residencial/comercial/industrial), capacidad
- Output: Rango estimado de inversión
- Lógica: Puede ser puramente frontend con rangos predefinidos
- Impacto: Tiempo en página, calidad del lead

#### C. Formulario de cotización en 2 pasos (wizard)
- Paso 1: Tipo de servicio (Instalación / Mantención / Reparación)
- Paso 2: Campos contextuales según servicio seleccionado
- Mejora el flujo actual de "mostrar campo presupuesto solo para Instalación"

### PRIORIDAD MEDIA

#### D. Tabs de servicios en homepage
- Reemplazar cards estáticas por tabs con contenido expandible
- Instalación / Mantención / Reparación — cada uno con descripción, precio referencial, CTA

#### E. Video con autoplay muted como hero background
- Impacto visual superior al hero estático actual
- Reducir tamaño con `preload="none"` y poster de alta calidad como fallback

#### F. Mapa de cobertura interactivo
- Mostrar regiones/comunas donde operan
- Refuerza Local SEO y señales de relevancia geográfica

### PRIORIDAD BAJA

#### G. Chat en vivo
- Integrar Crisp, Tidio o Intercom
- Alternativa: chatbot simple con respuestas sobre servicios y precios

#### H. Comparador de tipos de ascensores
- El slice `Comparative` existe pero está subutilizado
- Activar con contenido: hidráulico vs eléctrico vs montacargas

---

## Infraestructura Existente sin Usar

| Sistema | Archivo | Estado | Oportunidad |
|---------|---------|--------|-------------|
| AWS Amplify + GraphQL | `services/budget.services.js` | Configurado pero no conectado a forms | Activar para cotizaciones |
| Swiper 8.3.1 | `package.json` | Instalado, no usado en slices | Reemplazar React Slick |
| Framer Motion 4.1.17 | Varios | Solo en FAQ | Usar en hero, counters, cards |

---

## Quick Wins (implementables en < 1 día)

1. Agregar `tel:` en header
2. Agregar `poster` a videos
3. Mover EmailJS keys a `.env.local`
4. Agregar Schema `LocalBusiness` en `_document.js`
5. Mejorar meta description con ciudad + años + CTA
6. Agregar botón WhatsApp flotante
