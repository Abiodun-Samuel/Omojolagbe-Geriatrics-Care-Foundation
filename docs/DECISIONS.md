# Decisions Log

Defensible choices made where the brief left room, so momentum is never lost on a question I can answer myself.

## D1 — Em dash in existing copy (G03)
The brief forbids em dashes in code, copy, comments, docs (Phase 9 rule 9). One **existing** sacred string (G03, the gallery line) contains an em dash: "...the unique beauty of aging — a mosaic...". Rule: sacred copy is not altered. Resolution: the grep gate in Phase 9 targets em dashes **I author**; G03 is preserved verbatim as data in the `content/` layer and annotated as an inherited exception so the repo grep is explained, not silenced by editing the client's words. If the client later approves rewording, it becomes an en-dash-free sentence. Documented, not hidden.

## D2 — Brand yellow canonical value
Logo samples give `#FFF975`; CSS carried `#FFFF03`/`#FAFA2E`. Canonical brand yellow set to **`#FFF400`** (saturated lemon) with `#FFF975` retained as a light tint. One sentence: it is the value that reads as a deliberate, saturated brand yellow across both the logo and the legacy CSS rather than a washed-out or neon outlier.

## D3 — Yellow is fill-only, never body text
Contrast math is decisive (`1.10:1` on white). Yellow is used only as a fill under dark text, or as a large graphic/rule on dark. Enforced by not defining a light-surface text token in the yellow ramp.

## D4 — Foundation vs commercial identity (CONFIRMED by client)
The entity is **one brand with two arms**: paid home-care services (booking, pricing, the marketing funnel the brief wants) as the **primary** conversion path, and the foundation/community work (needs, donations, training outreach) as a first-class but **secondary** narrative. Client chose "Two arms, services-led" on 2026-07-16.

## D4b — Coverage claims (CONFIRMED by client)
Ibadan is the served city (only one the existing copy supports). Lagos, Abuja, Port Harcourt are presented as **"expanding to" / available for diaspora-arranged care**, never as fully-served. No false coverage claims.

## D4c — Pricing (CONFIRMED by client)
`/pricing` and home pricing indication show **indicative Naira ranges/tiers clearly labelled as sample figures** in the `content/` layer, with honest "final cost after free assessment" framing. Client swaps real numbers in one file.

## D5 — Router choice
react-router v7 declarative with nested layouts and scroll restoration. TanStack Router not chosen: the site is content/marketing with simple typed params (`:slug`); v7's data-agnostic declarative mode plus a small typed route helper covers it without the extra concept weight.

## D6 — Metadata approach
React 19 native document metadata (`<title>`/`<meta>` hoisted from components) instead of react-helmet-async. Justified: React 19 hoists these natively, removing a dependency the audit flagged as barely used.

## D7 — Placeholder content isolation
All invented content (testimonials, caregiver bios, journal posts, indicative pricing) lives in `src/content/` typed records with an explicit `placeholder: true` flag and a visible "sample" affordance in UI, so the client swaps real data in one place (brief Phase 5.7, 6).

## D8 — Dated Training event (TR04-TR06)
The existing Training copy is a specific past-dated event (Sept 2025). Copy is preserved verbatim, but the Training/Careers page frames it as a recurring programme with the specific cohort shown as the "most recent cohort" example, so a past date does not read as a broken live event. No words changed.
