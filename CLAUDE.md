# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
yarn dev          # Start dev server at localhost:3000
yarn build        # Production build
yarn start        # Run production build
yarn lint         # Run ESLint
yarn format       # Format with Prettier
yarn slicemachine # Launch Prismic Slice Machine UI at localhost:9999 (alias: yarn sl)
yarn export       # Build + static export to ./dist
```

No tests exist (`yarn test` echoes a placeholder and exits).

## CRITICAL — Build verification before every commit

**ALWAYS run `yarn build` locally and confirm it exits with no errors before doing `git commit` and `git push`.**

```bash
yarn build   # must complete with "Done in X.Xs" and no errors
```

Vercel uses a Linux x64 environment with a different Node.js version than local. Errors that pass locally but fail on Vercel are hard to diagnose. Running the build locally catches 95% of them.

**Known fragile areas — do not change without re-running the build:**
- `next.config.js` — `swcMinify` must stay `false`. Setting it to `true` crashes Vercel's Terser/SWC WASM due to a version mismatch between `@next/swc-linux-x64-gnu@14.2.5` (optional dep) and Next.js 12.2.1.
- `experimental.forceSwcTransforms` — removed; it conflicted with the same SWC version mismatch on Linux.
- Any change to `package.json` dependencies — run `yarn install && yarn build` together.


### AWS Configuration (Amplify Gen 2)
Amplify is configured in `src/main.tsx` using `amplify_outputs.json` (at the project root):
```js
import outputs from '../amplify_outputs.json';
Amplify.configure(outputs);
```
- Backend: `melevadores-sdk-backend-v2` (Amplify Gen 2, separate repo)
- CloudFormation stack: `amplify-backoffice-manu-sandbox-0b1ca78abf`
- AppSync endpoint: `https://xograe6thrd75kdnsq2ggl7flq.appsync-api.us-east-2.amazonaws.com/graphql` — auth mode: `AMAZON_COGNITO_USER_POOLS` (default) + `API_KEY` (public payment flow)
- All GraphQL models use the `v2` prefix (e.g., `v2Users`, `v2Managers`)
- `amplify_outputs.json` is **not a secret** and should be committed
- To regenerate after backend changes, run `npm run generate:config` (requires Node 20)


### AWS CLI Profile
**ALWAYS use `--profile melevadores-prod`** for all AWS CLI and Amplify commands in this project. Never use any other profile.

### Redux Store Pattern
Every domain (e.g., Courses) follows this pattern:
1. `queries.ts` / `mutation.ts` — raw GraphQL strings
2. `services.ts` — calls `generateClient().graphql(...)`, returns typed data
3. `slice.ts` — `createAsyncThunk` calls the service; slice handles pending/fulfilled/rejected

**Note:** newer stores (`AppUsers/`, `GmailInbox/`) use `mutations.ts` (plural) instead of `mutation.ts`. This inconsistency exists in the codebase.

Active Redux slices: auth, location, student, course, sessionDetail, sessionType, enrollment, parameters, relationships, academyStudents, emailSend, paymentTransactions, shoppingCartDetails, schedules, shoppingCarts, WP, supportTickets, evaluations, studentEvaluations, product, quickResponse, rolePermissions, gmailInbox, appUsers, plus UI slices (darkMode, colorScheme, sideMenu, theme, compactMenu, pageLoader, breadcrumb).


## Design System — MANDATORY

**Always read `DESIGN.md` before developing or modifying any UI component, slice, or page.**

`DESIGN.md` is the single source of truth for all visual decisions: colors, typography, spacing, and component specs. Never use raw hex values inline — always reference `theme.colors.*` from `components/styles/theme.js`. Apply spacing via the mixins in `components/styles/mixins.js` (`container`, `sectionPadding`).

```bash
npx @google/design.md lint DESIGN.md    # Validate tokens after changes
npx @google/design.md export --format dtcg DESIGN.md  # Export tokens
```

## Architecture

**Stack:** Next.js 12 (React 18) + Prismic CMS + styled-components + AWS Amplify/GraphQL

### Routing & Pages

| Path | File | Prismic fetch |
|---|---|---|
| `/` | `pages/index.js` | `getSingle("homepage")` |
| `/{uid}` | `pages/[uid].js` | `getByUID("page", uid)` |
| `/landing/{uid}` | `pages/landing/[uid].js` | `getByUID("landingpage", uid)` |

All pages use ISR with 60s revalidation. `prismicio.js` contains the link resolver and Prismic client config.

### Two Layout Systems

Standard pages (`/`, `/{uid}`) use `<Layout>` which renders Header → content → Footer. Landing pages (`/landing/{uid}`) use a completely separate `<LandingLayout>` with its own `LandingNav` and `LandingFooter` — these are independent Prismic document types (`landingnav`, `landingfooter`). Landing pages also include a hardcoded WhatsApp floating CTA.

Every page follows this `getStaticProps` pattern:
1. Fetch the page document
2. Fetch menutop + footermenu (or their landing equivalents)
3. Pass everything to the layout + `<SliceZone>`

### Slice Architecture (Three-Level Pattern)

Every Prismic slice follows a strict three-level structure:

```
slices/{SliceName}/index.js           ← thin auto-generated wrapper (do not edit)
components/slices/{SliceName}/index.js ← variant router
components/slices/{SliceName}/variants/{variantName}/ ← actual JSX implementation
```

The `slices/{SliceName}/index.js` just re-exports from `components/slices/`. The middle `index.js` reads `slice.variation` and renders the correct variant component. Add new variants by creating a new folder under `variants/` and adding a branch to the router.

Slice registration lives in `slices/index.js` (auto-generated by Slice Machine — never edit manually). It maps snake_case Prismic slice IDs to PascalCase components. Both `pages/index.js` and `pages/[uid].js` import this `components` object and pass it to `<SliceZone>`. Landing pages have their own slice set.

### Adding / Modifying Slices

New slices must be created via Slice Machine (`yarn sl` → localhost:9999) — this generates `slices/{Name}/model.json` and the wrapper `index.js`. Then:
1. Create `components/slices/{Name}/index.js` (variant router)
2. Create `components/slices/{Name}/variants/{default}/` (implementation)
3. Slice Machine automatically updates `slices/index.js` on next build

See `Documentation/create-custom-type.md` for Prismic custom type guidance.

### Prismic Document Types

| Type ID | Path | Description |
|---|---|---|
| `homepage` | `/` | Single entry, always fetched with `getSingle` |
| `page` | `/{uid}` | Dynamic pages |
| `landingpage` | `/landing/{uid}` | Campaign landing pages |
| `menutop` | — | Site header nav (single) |
| `footermenu` | — | Site footer (single) |
| `landingnav` | — | Landing header (single) |
| `landingfooter` | — | Landing footer (single) |

### Backend & Forms

**Budget/quote form** — AWS Amplify + AppSync GraphQL:
- `services/budget.services.js` exposes `createBudget(input)`, `createType(input)`, `fetchBudgets(idBudget)`
- Mutations/queries defined in `graphql/mutations.js` and `graphql/queries.js`
- Amplify must be initialized before use (config expected from environment)

**Contact forms** — EmailJS (`emailjs-com`), used inside Contact slice.

### Analytics & SEO

- `utils/gtag.js` exports `pageview(url)` and `event({action, …})` — GA tracking ID `AW-16938080060`, GTM container `GTM-5TR6ZVP4`
- `utils/seo.js` exports `getMetaTags({description, author, title})` — returns 16 meta tags including OpenGraph. The `og:url` is hardcoded to `https://melevadores.cl` and `og:image` points to the Prismic CDN SEO asset.
- SEO data (title, description) is pulled from `page.data.seoTitle` / `page.data.seodescription` on every page.

### Image Optimization

`next.config.js` uses the `akamai` image loader. External domains allowed: `images.prismic.io`, `images.unsplash.com`. Add new domains to the `domains` array before using external images.

### Naming Conventions

| Item | Convention | Example |
|---|---|---|
| Prismic doc type IDs | lowercase, no separator | `homepage`, `landingpage` |
| Slice folder names | PascalCase | `Hero`, `LandingBanner` |
| Slice keys in `slices/index.js` | snake_case | `hero`, `landing_banner` |
| Component files | PascalCase.js | `Layout.js`, `Header.js` |
| Theme keys | camelCase | `theme.colors.bgColorPrimary` |



### AWS Configuration (Amplify Gen 2)
Amplify is configured in `src/main.tsx` using `amplify_outputs.json` (at the project root):
```ts
import outputs from '../amplify_outputs.json';
Amplify.configure(outputs);
```
- Backend: `melevadores-sdk-backend-v2` (Amplify Gen 2, separate repo)
- CloudFormation stack: `amplify-backoffice-manu-sandbox-0b1ca78abf`
- AppSync endpoint: `https://xograe6thrd75kdnsq2ggl7flq.appsync-api.us-east-2.amazonaws.com/graphql` — auth mode: `AMAZON_COGNITO_USER_POOLS` (default) + `API_KEY` (public payment flow)
- All GraphQL models use the `v2` prefix (e.g., `v2Users`, `v2Managers`)
- `amplify_outputs.json` is **not a secret** and should be committed
- To regenerate after backend changes, run `npm run generate:config` (requires Node 20)

The only `.env` variable is `VITE_GOOGLE_MAPS_API_KEY` in `.env.local`.

### AWS CLI Profile
**ALWAYS use `--profile melevadores-prod`** for all AWS CLI and Amplify commands in this project. Never use `miniswimmer` or any other profile.
