# Brand Audit

## Identity
- **Name (legal / full):** Omojolagbe Geriatric Care Foundation
- **Secondary trading name:** Omojolagbe Home Care Services (used in nav and email `omojolagbehomecareservices1902@`)
- **Tagline (from logo):** "Supporting the independent of the elderly"
- **Founded:** 2018, Ibadan, Oyo State, Nigeria
- **Registration:** Corporate Affairs Commission (CAC), Cert. No. 191574
- **Base city:** Ibadan (address: No 15, Akin Alabi Street, Welder B/S, Alakia-Isebo Road, Ibadan, Oyo State)

> Note: this is a **registered foundation**, not a commercial franchise. The brief describes a commercial home-care marketing brand. This tension is raised in the Phase 0 summary and must be resolved before Phase 1. It does not change the brand colours or logo.

## Colour (sampled directly from the logo PNG and existing CSS)

### Brand yellow (the signal colour)
Sampled from `src/assets/images/logo/logo-md.png`. The logo yellow is a bright **lemon yellow with a slight green lean**, not gold or amber.

| Token | Hex | Source |
|-------|-----|--------|
| Dominant logo yellow | `#FFF975` | most common opaque pixel (1312 samples) |
| Brightest saturated yellow | `#FFFE70` | max saturation pixel |
| CSS `--yellow-2` | `#FFFF03` | existing `index.css` |
| CSS `--yellow-0` | `#FAFA2E` | existing `index.css` |
| CSS `--yellow-1` | `#EFEF75` | existing `index.css` |
| CSS `--yellow` | `#FFFFC4` | existing `index.css` |

**Chosen canonical brand yellow: `#FFF400`** (a clean, saturated lemon yellow that reconciles the logo `#FFF975` with the CSS `#FFFF03`/`#FAFA2E` and reads as intentional rather than washed out). The logo's own `#FFF975` is retained as a lighter tint. Final tonal scale is defined in `DESIGN_SYSTEM.md`.

### Brand black / ink
| Token | Hex | Source |
|-------|-----|--------|
| Logo dark (sampled) | `#221D18` | avg of dark logo pixels (1036 samples) |
| CSS `#242424` | `#242424` | used in Home gallery/contact chips |
| CSS `--grey-2` | `#273746` | existing |

**Chosen canonical ink: `#1A1712`** near-black warm ink, with `#242424` retained as an alternate surface. Warm (not blue-black) to sit under a warm yellow.

### Greys / neutrals in current use
| Hex | Where |
|-----|-------|
| `#909090` | body/muted text on Home contact, About mission, Contact info |
| `#B1B1B1` | hero paragraph, carousel indicators |
| `#839192` | footer text |
| `#C3C0B3` | header nav links |
| `#213547` | root text colour (light scheme) |

### Contrast facts (WCAG, computed)
| Pair | Ratio | Verdict |
|------|-------|---------|
| Brand yellow `#FFF975` on white `#FFFFFF` | **1.10:1** | FAILS everything. Yellow is never text on light. |
| Brand yellow `#FFF975` on black `#000000` | **19.06:1** | Pass AAA. Yellow works as text on dark or as fill under dark text. |
| Brand yellow `#FFF975` on ink `#221D18` | **15.16:1** | Pass AAA. Primary yellow-on-ink relationship. |
| Ink `#221D18` on white | **16.71:1** | Pass AAA. Body text baseline. |

**The single most important brand rule:** yellow is a fill-and-graphic colour, never a body-text colour. Dark text on yellow, or yellow text/graphics on dark. This is enforced in the token layer.

### Supporting accent
The old CSS carried a green family (`#245140`, `#5A947C`, `#629584`) that never actually rendered anywhere in the components. It is not part of the visible brand. A single supporting accent (a deep evergreen for "trust/medical" affordances such as verified badges and success states) is justified in `DESIGN_SYSTEM.md`, or dropped, per the Phase 2 decision.

## Logo assets
| File | Format | Dimensions | Notes |
|------|--------|-----------|-------|
| `src/assets/images/logo/logo-md.png` | PNG RGBA | 120 x 126 | Primary, transparent bg. Circular badge: yellow ring, dark org name, central photo of elderly people, tagline. Low resolution. |
| `src/assets/images/logo/logo-md.jpg` | JPEG | 410 x 432 | Larger but JPEG (white/opaque bg, no transparency). |
| `src/assets/images/logo/logo-sm.jpg` | JPEG | 103 x 108 | Small. |

**Logo gaps:** no SVG exists; highest-fidelity raster is 410x432 JPEG (opaque) or 120x126 PNG (transparent). The `<Logo />` component will serve the PNG for transparent placement and needs a `variant="mark"` fallback. An SVG trace or a client-supplied SVG is a recommended follow-up (recorded in `GAP_ANALYSIS.md`). The badge is a photographic emblem, so it does not invert cleanly to a single-colour mark; a dark-surface treatment (place on ink card / drop the tagline ring) is proposed in the design system.

## Favicon and PWA assets (in `public/favicon/`)
- `favicon.ico`, `favicon-16x16.png`, `favicon-32x32.png`
- `apple-touch-icon.png`
- `android-chrome-192x192.png`, `android-chrome-512x512.png` (512 is a real 512x512 PNG)
- `site.webmanifest` — currently has **empty** `name` and `short_name`, `theme_color`/`background_color` both `#ffffff`, and icon `src` paths missing the `/favicon/` prefix (bug). To be rewritten with real name, brand ink theme colour, and correct paths.

## Fonts currently loaded
- **Poppins** (Google Fonts, weights 100-900, `display=swap`), forced globally via `body { font-family: "Poppins" !important }`.
- The brief explicitly forbids Poppins-for-everything. New pairing defined in `DESIGN_SYSTEM.md`.

## Social / Open Graph
- **None.** No `og:*` or `twitter:*` tags, no social share image exists. Full gap.

## Third-party brand touchpoints
- Facebook: `https://web.facebook.com/profile.php?id=100081814689135`
- WhatsApp: `https://wa.me/2348057015681`
- Designer credit: Abiodun Digital Hub (`https://abiodunsamuel.com`)
