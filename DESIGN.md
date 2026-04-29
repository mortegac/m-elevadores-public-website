---
version: "1.0"
name: M-Elevadores
description: Visual identity system for m-elevadores.cl — elevator industry B2B/B2C website using Next.js 12, styled-components, and Prismic CMS.

colors:
  primary: "#67614B"
  secondary: "#243C70"
  blue: "#078FF1"
  blueDark: "#0066CC"
  blueDeep: "#001133"
  maroon: "#992430"
  peach: "#FBE3D5"
  coral: "#F5E9EA"
  white: "#FFFFFF"
  grey: "#363636"
  textPrimary: "#323130"
  textSecondary: "#605E5C"
  textTertiary: "#A19F9D"
  textMaroon: "#7C151F"
  btnPrimary: "#0066CC"
  btnPrimaryHover: "#0052A3"

typography:
  h1:
    fontFamily: Quicksand
    fontSize: 52px
    fontWeight: 800
    lineHeight: 60px
  h1-mobile:
    fontFamily: Quicksand
    fontSize: 40px
    fontWeight: 800
    lineHeight: 52px
  h2:
    fontFamily: Quicksand
    fontSize: 36px
    fontWeight: 700
    lineHeight: 64px
  h2-mobile:
    fontFamily: Quicksand
    fontSize: 32px
    fontWeight: 700
    lineHeight: 40px
  h3:
    fontFamily: Quicksand
    fontSize: 24px
    fontWeight: 500
    lineHeight: 32px
  h3-mobile:
    fontFamily: Quicksand
    fontSize: 16px
    fontWeight: 500
    lineHeight: 24px
  body-md:
    fontFamily: Quicksand
    fontSize: 16px
    fontWeight: 400
    lineHeight: 24px
  body-bold:
    fontFamily: Quicksand
    fontSize: 16px
    fontWeight: 700
    lineHeight: 22px
  display:
    fontFamily: Quicksand
    fontSize: 64px
    fontWeight: 800
    lineHeight: 62px
  label:
    fontFamily: Nunito Sans
    fontSize: 16px
    fontWeight: 700
    lineHeight: 22px

spacing:
  xs: 8px
  sm: 16px
  md: 24px
  lg: 32px
  xl: 64px
  container-max: 1136px
  section-desktop: 64px
  section-mobile: 20px

rounded:
  btn: 22px
  input: 8px
  card: 8px

components:
  button-primary:
    backgroundColor: "{colors.btnPrimary}"
    textColor: "{colors.white}"
    typography: "{typography.body-md}"
    rounded: "{rounded.btn}"
    padding: 12px 30px
    height: 46px
  button-primary-hover:
    backgroundColor: "{colors.btnPrimaryHover}"
    textColor: "{colors.white}"
    rounded: "{rounded.btn}"
    padding: 12px 30px
    height: 46px
  button-secondary:
    backgroundColor: transparent
    textColor: "{colors.btnPrimary}"
    rounded: "{rounded.btn}"
    padding: 12px 30px
    height: 46px
  input:
    backgroundColor: "{colors.white}"
    textColor: "{colors.textPrimary}"
    rounded: "{rounded.input}"
    padding: 12px
    height: 48px
  card:
    backgroundColor: "{colors.white}"
    rounded: "{rounded.card}"
  section-container:
    padding: "{spacing.md}"
    width: "{spacing.container-max}"
---

## Overview

M-Elevadores is a Chilean B2B/B2C website for the elevator industry. The brand communicates **trust, precision, and modernity** — industry reliability paired with approachable service. The visual identity uses a restrained, professional palette anchored in deep blues and neutral tones, with strategic use of vivid blue accents for CTAs.

The primary typeface is **Quicksand** — a rounded geometric sans-serif that balances technical precision with approachability, suitable for both body text and large display headings. **Nunito Sans** serves as a secondary face for labels and supporting UI elements.

Styling is implemented with **styled-components** and a centralized `Theme` object in `components/styles/theme.js`. All design decisions should reference this source of truth.

## Colors

### Primary & Brand

- **primary** (`#67614B`) — warm brown, used for brand identity and muted accents
- **secondary** (`#243C70`) — dark navy, initial body background and structural elements
- **blue** (`#078FF1`) — vivid sky blue, section background accents and highlights
- **blueDark** (`#0066CC`) — primary action color for buttons and interactive elements
- **blueDeep** (`#001133`) — darkest text on light backgrounds, authority headings

### Feedback & Status

- **maroon** (`#992430`) — warnings, error states, alert accents
- **textMaroon** (`#7C151F`) — maroon text variant for inline error messages

### Backgrounds

- **peach** (`#FBE3D5`) — warm light background for alternating sections
- **coral** (`#F5E9EA`) — subtle coral background for callout blocks
- **white** (`#FFFFFF`) — default card and page background

### Text Scale

Four neutral grays form the text hierarchy:
1. `textPrimary` `#323130` — body copy, primary readable content
2. `textSecondary` `#605E5C` — supporting text, captions
3. `textTertiary` `#A19F9D` — placeholder text, disabled states
4. `grey` `#363636` — hover state backgrounds

## Typography

**Primary font:** [Quicksand](https://fonts.google.com/specimen/Quicksand) — weights 400, 500, 600, 700, 800  
**Secondary font:** [Nunito Sans](https://fonts.google.com/specimen/Nunito+Sans) — weights 300, 700  
**Letter spacing:** 0px globally (no tracking adjustment)  
**Font import:** Google Fonts CDN with `<link rel="preconnect">` optimization in `_document.js`

Typography scales responsively at the **960px** breakpoint. All heading sizes are defined in pairs (desktop / mobile) in the Theme object.

### Scale

| Token | Size | Weight | Line Height | Context |
|---|---|---|---|---|
| `display` | 64px | 800 | 62px | Hero numerics, statistics |
| `h1` | 52px / 40px | 800 | 60px / 52px | Page titles |
| `h2` | 36px / 32px | 700 | 64px / 40px | Section headings |
| `h3` | 24px / 16px | 500 | 32px / 24px | Card titles, sub-sections |
| `body-md` | 16px | 400 | 24px | Body copy |
| `body-bold` | 16px | 700 | 22px | Emphasized inline text |
| `label` | 16px | 700 | 22px | Nunito Sans, UI labels |

## Layout & Spacing

**Max container width:** 1136px (centered, auto margins)  
**Container padding:** 24px horizontal (desktop and mobile)  
**Section vertical padding:** 64px (desktop), 20px (mobile)  
**Primary breakpoint:** 960px (md) — switches between mobile and desktop layouts

### Breakpoints

| Name | Value | Usage |
|---|---|---|
| xs | 450px | Extra small devices |
| sm | 600px | Small tablets |
| md | 960px | Primary desktop breakpoint |
| xl | 1024px | Large desktop |

Responsive logic in styled-components uses `@media (min-width: ${theme.breakpoints.md})` for mobile-first scaling.

### Touch Targets

Interactive elements (buttons, links, nav items) must have a minimum touch target of **48px × 48px**. The `tapTarget` mixin in `components/styles/mixins.js` enforces this.

## Shapes

Buttons use a **pill-style** border radius (`22px`) — a signature rounded shape that contrasts with the blocky industrial context of elevator content, reinforcing approachability.

Inputs and cards use a softer `8px` radius for consistency.

## Components

### Button

The primary CTA button:
- Background: `#0066CC` → hover `#0052A3` (darkened from `#087DF3` to meet WCAG AA 4.5:1 with white text)
- Text: white, 16px / 400 weight (Quicksand)
- Shape: `border-radius: 22px`, height `46px`, padding `12px 30px`
- Always full accessible touch target

### Inputs / Forms

Forms are used for budget requests (AWS Amplify/GraphQL) and contact (EmailJS):
- Height: min `48px` for touch accessibility
- Padding: `12px`
- Border-radius: `8px`
- Font size: `16px` (prevents iOS zoom)
- Border: `1px solid #ccc`

### Section Container

Every slice wraps content in a container:
```
max-width: 1136px
margin: 0 auto
padding: 0 24px
```

Vertical section padding applied by the `sectionPadding` mixin: `64px 0` desktop, `20px 1.25rem` mobile.

## Do's and Don'ts

**Do:**
- Use `blueDark` (`#0066CC`) for all primary CTAs
- Use `Quicksand` at weight 700–800 for headings
- Apply the 22px pill radius to all buttons
- Maintain the 1136px container max-width
- Always test responsive layouts at the 960px breakpoint

**Don't:**
- Introduce new font families without updating `_document.js` and the Theme
- Use raw hex values inline — always reference `theme.colors.*`
- Add spacing values outside the defined scale (8/16/24/32/64px)
- Set touch targets below 48px on interactive elements
- Mix `maroon` with `coral` backgrounds (insufficient contrast)
