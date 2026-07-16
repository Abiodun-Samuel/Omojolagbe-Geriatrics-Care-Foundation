# Repository Audit

## Stack (current)
- React 18.2, ReactDOM 18.2
- Vite 5 + `@vitejs/plugin-react-swc`
- react-router-dom 6.21 (BrowserRouter, non-nested `<Routes>`)
- Bootstrap 5.3.2 (CSS from `public/assets/css/*` **and** npm `bootstrap`; JS imported in `main.jsx`)
- framer-motion 10, AOS 2.3.4 (scroll animation, `AOS.init()` in `App.jsx` with no dep array so it re-runs every render)
- react-icons 4 (7 different icon families used)
- react-helmet-async 2 (only ever sets `<title>`)
- react-hot-toast (mounted, never fired)
- react-modal, react-grid-gallery, react-player (gallery)
- @emailjs/browser 3.11 (**installed, never imported** — dead dep)
- ESLint 8 flat-ish legacy `.eslintrc.cjs`; no TypeScript, no Prettier

## Routes (current)
| Path | Component | Notes |
|------|-----------|-------|
| `/` | `pages/Home` | Hero carousel + About + Services + Contact + Gallery + delayed Training modal |
| `/about` | `pages/About` | |
| `/contact` | `pages/Contact` | Form is a `mailto:` link, not a real submit |
| `/gallery` | `pages/Gallery` | Image/Video toggle, react-grid-gallery + react-player, embeds `ExpertGallary` |
| `/training` | `pages/Training` | Single dated event flyer (Sept 2025) |
| `/service/home-care-services` | `pages/services/HomeServices` | Eagerly imported (not lazy) |
| `*` | `pages/Notfound` | Just a 404 image + Home button |

## Components
- `components/Header/Header.jsx` (+ `Header.css`) — fixed Bootstrap navbar, dropdown for Services (one live item, one commented out).
- `components/Footer/Footer.jsx` — three-column footer.
- `components/Home/{Hero,About,Service,Gallery,Contact}Section.jsx`
- `components/common/`: `Breadcrump` (sic), `CarouselItem`, `Helmet`, `PageLayout` (framer-motion mask reveal), `SectionHeader`, `TrainingComponent`, `TrainingModal`.

## Assets
- `src/assets/images/`: `bg/` (8 background jpgs), `expert/` (13 jpeg portraits), `gallery/` (26 jpgs), `img/` (about/training/intro/arrows), `icons/` (4 svg), `logo/` (3), `videos/` (6 mp4), `404.jpg`.
- `public/assets/css/`: prebuilt Bootstrap CSS bundles (`bootstrap.min.css`, `bootstrap-extended.min.css`, plus unused `colors/components/vendors`).
- `public/assets/js/vendors.min.js` (unused).
- `public/favicon/*` + `site.webmanifest`.

## Forms
| Form | Fields | Submission |
|------|--------|-----------|
| Home contact block | (links only) | mailto + tel links |
| Contact page | name, email, subject, message | **`<a href="mailto:...">`** built from state. No real POST, no validation, no success state. |
| Training | none | WhatsApp link |

## External integrations
- WhatsApp: `wa.me/2348057015681` (Training only)
- Facebook: profile link (Home contact only)
- Email: two Gmail addresses via `mailto:`
- @emailjs/browser: installed, unused
- No maps embed, no analytics, no sitemap/robots, no structured data

## Nav items (current)
Home, About, Services ▸ (Omojolagbe Home Care Services), Gallery, Contact.

## Footer links (current)
Home, About, Gallery, Contact, Home Care Services + address, phones, emails + designer credit.

## Bugs / debt found during audit
1. `AOS.init()` in `App.jsx` has no dependency array — runs on every render.
2. `site.webmanifest` has empty name and broken icon paths (missing `/favicon/`).
3. `HomeServices` imported eagerly while every other page is lazy.
4. Contact "form" cannot actually submit; it opens the mail client.
5. `react-hot-toast` `<Toaster />` mounted but never used.
6. `@emailjs/browser` installed but never imported.
7. Bootstrap loaded twice (public CSS files + npm package JS).
8. Duplicate/near-duplicate founding paragraph in three places (acceptable content-wise, see inventory).
9. Typos in visible copy: `qualify of lives`, `priviledged`, backtick apostrophes, `justfiy-content` (class), `construction` alt text on About images, `Dammyy`.
10. `Breadcrump` misspelled component name.
11. Hero carousel has three slides that all render the identical `CarouselItem` (same copy 3x).
12. No `h1` on the home page (hero uses `<h1>` inside CSS `#hero__section h1`, but About page also emits an `<h1>` — one-h1 discipline not enforced anywhere).

## What to delete in the rebuild
Bootstrap (npm + public CSS), jQuery (none found, good), AOS, react-icons, react-modal, react-grid-gallery, react-player (replace with a lighter lightbox/native video), react-helmet-async (React 19 native metadata), react-hot-toast (unless we wire real toasts), @emailjs/browser, framer-motion (replaced by `motion`), `public/assets/*` prebuilt bundles, `public/assets/js/vendors.min.js`.

## What to keep
Logo PNG, favicons (fix manifest), the elderly/expert portraits and gallery photos (real Nigerian subjects — genuinely valuable, brief wants Nigerian imagery), the 6 videos, all copy.
