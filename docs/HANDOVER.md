# Handover: Omojolagbe Geriatric Care

Everything a developer or the client needs to run, change, and ship this site.

## Stack

| Concern | Choice | Note |
|---|---|---|
| Framework | React 19 | Function components only, `ref` as a prop, React Compiler enabled |
| Build | Vite 7 + `@vitejs/plugin-react` | |
| Language | TypeScript, strict, no `any` | Path alias `@/` maps to `src/` |
| Styling | Tailwind CSS v4, CSS-first | All tokens in `@theme`, no `tailwind.config.js` |
| Router | react-router v7 (declarative) | Nested layouts, scroll restoration, lazy routes |
| Animation | `motion` | The framer-motion successor |
| Icons | `lucide-react` | No other icon set, no emoji as icons |
| Forms | react-hook-form + zod | One schema, shared with types |
| Metadata | React 19 native `<title>`/`<meta>` | No helmet library |

Full rationale for each non-obvious choice is in [DECISIONS.md](./DECISIONS.md).

## Running it

```bash
npm install
npm run dev        # dev server
npm run build      # typecheck + prebuild gates + production build
npm run preview    # serve the built site locally
```

`npm run build` runs, in order: `generate-seo` (sitemap + robots),
`generate-og` (social image), `check-images`, `check-copy`, then `tsc` and
`vite build`. A broken image link or a lost client string fails the build.

Standalone checks:

```bash
npm run check:copy     # 100% of original copy still present
npm run check:images   # every image resolves
npm run lint
npm run typecheck
npx tsx scripts/audit-pages.ts     # screenshots + axe + one-h1, needs preview running
npx tsx scripts/check-keyboard.ts  # keyboard + reduced-motion, needs preview running
```

## Project structure

```
src/
  app/         router, layouts, error and fallback boundaries
  pages/       route components, thin
  sections/    composed page sections
  components/  reusable UI primitives
  content/     ALL copy, media, and data (typed)
  lib/         utils, hooks, zod schemas, motion presets, site config
  styles/      index.css (the @theme token layer and primitives)
scripts/       build-time gates and generators
docs/          audit, research, design system, decisions, this file
```

## How to change copy

All user-facing text lives in `src/content/`. Nothing is hardcoded in a
component that a non-developer would need to hunt for.

- Site name, phones, emails, address, hours, socials, WhatsApp number:
  `src/lib/site.ts`
- Services, conditions, pricing, FAQ, caregivers, journal, testimonials,
  careers, the About narrative, legal pages: the matching file in
  `src/content/`
- Navigation and footer links: `src/content/nav.ts`

After editing copy, run `npm run check:copy`. It re-verifies every original
string is still present (this is a hard build gate at 100%).

## How to change images

Every image is a typed record in `src/content/media.ts`:
`{ id, src, srcSet, width, height, alt, credit, focalPoint }`. There are no
inline image URLs in components.

- Local images live in `src/assets/images/` and are imported at the top of
  `media.ts`.
- Remote images use direct Unsplash/Pexels CDN URLs with explicit sizing.
- Videos are static files in `public/media/videos/` (kept out of the JS
  bundle) and referenced by URL.

Always set real `width`/`height` (prevents layout shift) and meaningful `alt`.
Run `npm run check:images` after any change; a broken link fails the build.

## How to wire the forms (the one place)

Forms currently submit through `src/lib/forms/adapter.ts`. With no backend
configured it opens the user's mail client with the submission prefilled, and
tells them so, honestly. It never fakes a silent success.

To send to a real backend, set one environment variable:

```
VITE_FORM_ENDPOINT=https://formspree.io/f/xxxx     # or a Resend function, or any JSON POST endpoint
```

The adapter POSTs `{ subject, ...fields }` as JSON. A honeypot field drops
bots silently. On a network failure the user is told to try again or use
WhatsApp. Nothing else needs to change; all three forms (contact,
application, booking) go through this one adapter.

## How to add a journal post

Add a record to the `journalPosts` array in `src/content/journal.ts`. The
type guides you: `slug`, `title`, `excerpt`, `category`, `date`,
`readingMinutes`, a `body` array of typed blocks (`h2`, `p`, `ul`), and
`placeholder: true` while it is sample content. The index page and the
`/journal/:slug` route pick it up automatically, and `generate-seo` adds it to
the sitemap on the next build (add the slug to the list in
`scripts/generate-seo.ts`).

Placeholder content across the site (sample testimonials, caregiver bios,
journal posts, indicative pricing) is flagged `placeholder: true` and shows a
visible "sample" tag, so the client can find and replace it in one place.

## Design tokens

All in `src/styles/index.css` under `@theme`, documented in
[DESIGN_SYSTEM.md](./DESIGN_SYSTEM.md). The load-bearing rules:

- **Yellow is a fill and graphic colour, never body text.** Brand yellow on
  white is 1.10:1. There is no light-surface yellow text token. For emphasis
  on a light surface use `marker-brand` (a highlighter behind ink). The only
  yellow usable as text at all is `brand-800` (`#755C00`), validated against
  every surface it lands on.
- **Every text colour is validated on every surface it can appear on**, not
  just white. This was a real bug caught by axe during the build; see the
  lesson recorded in DESIGN_SYSTEM.md. If you add a text/background pairing,
  check its contrast.
- Type roles are named utilities (`type-hero`, `type-h1` … `type-body`), not
  raw font-size classes, because Tailwind's `text-*` namespace covers both
  size and colour.
- On a dark band, add `on-ink` to the section so the eyebrow retints to a
  legible brand tint.
- The **care spine** (`src/components/CareSpine.tsx`) is the structural
  signature: a hairline down the left margin that fills with yellow as you
  scroll. It collapses to a static cap under reduced motion.

## Motion

Presets are in `src/lib/motion.ts`. Scroll reveals fire once as an element
enters view. Reveal a list as a **group** (`RevealGroup`/`RevealItem`, or a
parent `staggerParent`) rather than gating each child on its own viewport
position, or the last item in a tall narrow column can stay invisible (a bug
that occurred and was fixed). `prefers-reduced-motion` collapses everything to
short opacity fades globally.

## Accessibility

Semantic landmarks, one `h1` per page, a skip link, visible focus rings,
`aria-live` on form results, accessible names on every icon button, a
focus-trapped and focus-restoring lightbox and mobile menu. axe reports zero
violations across all 23 routes. Keep it that way: run `audit-pages.ts` before
shipping UI changes.

## SEO

Per-route `<title>`, description, canonical, Open Graph and Twitter cards via
the `Seo` component (`src/components/Seo.tsx`). JSON-LD for `MedicalBusiness`,
`Service`, `FAQPage`, `BreadcrumbList`, `Article` and `JobPosting` with
Nigerian `areaServed`/`geo`. `sitemap.xml`, `robots.txt` and the OG image are
generated at build time. Update `site.url` in `src/lib/site.ts` to the real
production domain before launch.

## Performance

Route-level and below-the-fold code splitting. Fonts are self-hosted, latin
subset only, and preloaded. CLS is 0. Initial JS is ~130KB gzipped, under the
180KB budget.

Lighthouse mobile (Lighthouse's simulated slow-4G with a 4x CPU slowdown),
best of three runs:

| Route | Perf | A11y | Best Practices | SEO | CLS |
|---|---|---|---|---|---|
| `/` | 81 | 100 | 100 | 100 | 0 |
| `/services` | 95 | 100 | 100 | 100 | 0 |
| `/book-assessment` | 92 | 100 | 100 | 100 | 0 |

Accessibility, Best Practices and SEO are 100 everywhere and CLS is 0. On the
home page, Lighthouse's slow-4G profile puts LCP around 4s: it is a text
element that waits on the JS render plus font. Unthrottled the same page is
Performance 98 with LCP ~1.1s, so on a real mid-range Android on a normal
connection it is fast. A prerender step was trialled and removed: an A/B
showed no performance gain on this hardware and it introduced a React
hydration mismatch. If the client wants to push the home LCP under 2s on the
emulated profile, the correct next step is server-side rendering (React Router
in framework mode or a small SSR host), not static prerendering of this SPA.

## Legal pages

`privacy`, `terms`, `cookies` in `src/content/legal.ts` are written plainly
for a Nigerian home care provider and **must be reviewed by the client's
lawyer before launch**. They are a starting point, not legal advice.

## Deployment (Vercel or Netlify)

Static SPA. Build command `npm run build`, output directory `dist`. Add a
catch-all rewrite so client routes resolve on refresh:

- **Vercel** (`vercel.json`): rewrite `/(.*)` to `/index.html`.
- **Netlify** (`_redirects` or `netlify.toml`): `/* /index.html 200`.

Set `VITE_FORM_ENDPOINT` in the host's environment variables to turn on real
form submissions, and set the production domain in `src/lib/site.ts`.
