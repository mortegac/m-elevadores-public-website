# Plan de Acción — Performance & SEO

Generado: 2026-04-29 | Última actualización: 2026-04-29 | Auditoría: melevadores.cl

---

## Estado actual tras fixes aplicados

| Item | Antes | Ahora |
|---|---|---|
| `target: "serverless"` | Deprecado (ignorado) | ✅ Eliminado |
| `swcMinify` | `false` | ✅ `true` |
| `experimental.runtime: "edge"` | Causaba fallos en landing pages | ✅ Eliminado |
| Security headers | Ninguno | ✅ 4 headers añadidos |
| GTM/GA loading | Bloqueaba render (~3.5s en mobile) | ✅ `afterInteractive` via `next/script` |
| `lang` en `<html>` | Ausente | ✅ `es-CL` |
| `crossOrigin` en preconnect | `"true"` (inválido) | ✅ `"anonymous"` |
| `robots.txt` Sitemap | Apuntaba a miniswimmer.us | ✅ `https://www.melevadores.cl/sitemap.xml` |
| `/sitemap.xml` | Retornaba HTML de error | ✅ XML dinámico desde Prismic |
| `/sitemap` | No existía | ✅ Página visual categorizada |
| `og:image` / `og:site_name` etc. | Usaban `name=` | ✅ `property=` |
| `og:url` | Hardcodeado al homepage | ✅ Dinámico por página |
| Canonical landing pages | Sin prefijo `/landing/` | ✅ Correcto |
| Description fallback | Un guión `"-"` | ✅ Texto descriptivo real |
| Keywords meta | Párrafo en español | ✅ Keywords reales con coma |
| `maximum-scale=1` | Bloqueaba zoom (violación WCAG) | ✅ Eliminado |
| `twitter:card` | `summary` | ✅ `summary_large_image` |
| H1 en hero | Ausente (todo era `<h2>`) | ✅ `<h1>` forzado en los 3 variants |
| Fallback H1 marca anterior | "Electromovilidad" | ✅ Eliminado |
| CTA header href | Relativo (roto desde subpáginas) | ✅ Absoluto `/cotiza` |
| Fallback CTA texto | "Contact" (inglés) | ✅ "Contáctanos" |
| Placeholder teléfono formularios | `+52` (México) | ✅ `+56` (Chile) |
| Copyright footer | "1999 , Inc." | ✅ Año dinámico + "SpA" |
| `defaultLanguage` en prismicio.js | `"en-us"` | ✅ `"es-cl"` |
| Soft 404s | `fallback: true` → HTTP 200 siempre | ✅ `fallback: 'blocking'` + `notFound` |
| FAQ respuestas SSR | JS-gated (crawlers no las veían) | ✅ Siempre en el DOM (CSS transition) |
| FAQ título | `heading1` (múltiples H1) | ✅ `heading2` en model.json |
| FAQ JSON-LD | Ausente | ✅ FAQPage schema |
| LocalBusiness JSON-LD | Ausente | ✅ En Layout.js |
| Service JSON-LD | Ausente | ✅ En LayoutLanding.js |
| CountUp SSR | Solo client-side | ✅ `<noscript>` con valor estático |
| `llms.txt` | Ausente | ✅ Creado en `/public/llms.txt` |
| Alt imágenes hero | `"HeroImg"` (placeholder) | ✅ Alt descriptivo con fallback |
| Build | ✅ Limpio | ✅ Limpio (11.4s) |

---

## Tareas pendientes

### INMEDIATO — Vercel (5 minutos) ⚠️ REQUIERE ACCIÓN TUYA

- [ ] **Añadir variable de entorno en Vercel → Settings → Environment Variables → Production:**
  ```
  NEXT_PUBLIC_SITENAME = https://www.melevadores.cl
  ```
  Sin esto, todos los canonicals siguen apuntando a `http://localhost/`. Forzar redeploy después.

---

### INMEDIATO — Prismic CMS ⚠️ REQUIERE ACCIÓN TUYA

- [ ] Llenar campo `seoTitle` en cada página publicada con título único (keyword + marca).
  - Ejemplo homepage: `"Salvaescaleras y Plataformas Elevadoras Chile | M-Elevadores"` (60 chars)
- [ ] Llenar campo `seodescription` en cada página (140-160 caracteres, incluir keyword y CTA).
  - Ejemplo homepage: `"Instalamos salvaescaleras y plataformas elevadoras para personas con movilidad reducida en Chile. Cotiza gratis hoy."`
- [ ] Corregir meta description del homepage: `"seguras"` → `"seguros"` (error de concordancia de género).

---

### ESTE MES — Performance

#### Fonts

- [ ] **Autohost Quicksand y Nunito Sans** (eliminar dependencia de Google Fonts CDN).
  1. Descargar archivos `.woff2` de cada peso necesario.
  2. Mover a `/public/fonts/`.
  3. Declarar con `@font-face` en `components/styles/GlobalStyle.js`.
  4. Añadir `<link rel="preload" as="font">` en `pages/_document.js`.
  Beneficio: elimina 2 round-trips cross-origin y reduce FOUT.

#### Imágenes

- [ ] **Añadir `loading="lazy"` en imágenes off-screen.**
  La imagen del hero debe quedar `loading="eager"` (es el LCP candidate). Todas las demás: `loading="lazy" decoding="async"`.
  Archivos: todos los slices que renderizan `<img>` fuera del hero.

- [ ] **Añadir `width` y `height` en imágenes del hero.**
  Archivo: `components/slices/HeroSlice/variants/default/index.js`
  Usar `image.dimensions.width` y `image.dimensions.height` de los datos de Prismic para reservar espacio y prevenir CLS.

#### Bundle JS

- [ ] **Auditar bundle con bundle analyzer.**
  ```bash
  npx @next/bundle-analyzer
  ```
  Candidatos a optimizar: Framer Motion (tree-shaking), AWS Amplify (importar solo módulos usados), `prismic-reactjs` (legado, reemplazable por `@prismicio/react`).

#### Accesibilidad / UX

- [ ] **Fix tap targets < 48px.**
  13 elementos interactivos están por debajo del mínimo. El logo del header es el peor caso (20px de alto).
  Añadir `min-height: 48px` al anchor del logo. Los botones CTA necesitan `min-height: 48px`.

---

### BACKLOG — AI Search & GEO

- [ ] **Integrar IndexNow** con webhook de Prismic para notificar a Bing/Yandex en cada publicación.
  La key `0ed803af-46a2-4b5c-abd7-067a08f3efa7` ya existe en `/public/` pero nunca se envía.

- [ ] **Activar social links en el footer.**
  Archivo: `components/common/footer/subComponents/SocialLinks/SocialLinks.jsx`
  Todos están comentados. Al menos Instagram o Facebook para señal off-page.

- [ ] **Añadir AggregateRating** al Service schema en landing pages cuando existen reviews.
  Archivo: `components/LayoutLanding.js`
  Calcular el promedio de estrellas de `LandingCustomerReview` slices en `getStaticProps`.

---

## Métricas de referencia (abril 2026)

| Métrica | Valor | Target |
|---|---|---|
| SEO Health Score | 28/100 → ~62/100 estimado post-fixes | >70/100 |
| LCP Desktop | 708ms | <2,500ms ✅ |
| LCP Mobile | 3,752ms → ~1,800ms estimado post GTM fix | <2,500ms |
| CLS Desktop | 0.013 | <0.10 ✅ |
| CLS Mobile | 0.066 | <0.10 ✅ |
| TTFB | 80-86ms | <200ms ✅ |
| JS Total | 2.2MB | <1MB ❌ |
| Structured Data | 0 → 3 schemas (LocalBusiness, Service, FAQPage) | >3 schemas ✅ |
| GEO Score | 27/100 | >60/100 |
