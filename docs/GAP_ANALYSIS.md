# Gap Analysis

What a top-tier home care brand has that this site does not. Grouped by how much it moves trust and conversion.

## Tier 1: trust and conversion machinery (the site currently has almost none)
- **Book a care assessment flow.** The money page. Right now there is only a mailto contact form. Top providers (Home Instead, Cera, Homage) lead every page with "book a free assessment / care consultation".
- **Proof of vetting and licensing.** No mention of how caregivers are screened, that nurses are NMCN-licensed, insurance, background checks, references. Care buyers choose on trust before price.
- **Trust strip / at-a-glance credentials.** Years active (since 2018), CAC registration, 1000+ elderly served, cities covered: the facts exist in copy but are never surfaced as scannable proof.
- **Real service detail pages.** One flat "Home Care Services" list of 12 items. Competitors give each service its own page with what's included, who it's for, and a CTA.
- **"Who we care for" / conditions pages.** Dementia, stroke, post-surgery, palliative, chronic conditions, new-mother/newborn: named but never explained per audience.
- **How it works.** No described process (assessment → matching → care plan → supervision → family reporting). Every major provider has this.
- **Pricing / cost transparency.** Nothing in Naira, no "what affects cost", no honest "assessment first" framing, no HMO/funding notes.
- **Testimonials with attribution.** No social proof at all.

## Tier 2: reach and differentiation
- **Diaspora page.** Nigerians abroad arranging care for parents at home is the single biggest under-served segment, and no competitor does it well. Genuine differentiator.
- **Coverage map.** Which cities are served (currently only Ibadan is evidenced; brief names Lagos, Abuja, Port Harcourt too: needs client confirmation).
- **Caregiver recruitment / careers.** Recruitment is half the business and the Training page shows they already run caregiver training. No careers funnel, no application form.
- **FAQ.** None. High-intent, high-SEO, high-trust.
- **Journal / resources / family guides.** None. Drives SEO and positions expertise.

## Tier 3: engineering, accessibility, findability
- **SEO:** no per-route titles/descriptions (only `<title>`), no canonical, no OG/Twitter, no sitemap.xml, no robots.txt, no JSON-LD (LocalBusiness/MedicalBusiness, Service, FAQPage, Review, BreadcrumbList), no `areaServed`/`geo`.
- **Accessibility:** no skip link, no landmark discipline, unlabelled icon buttons, low-contrast grey body text (`#909090` on white ~ 4.0:1 borderline), no focus-visible strategy, gallery modal focus not trapped, hero carousel auto-advances every 2s (motion + a11y problem).
- **Performance:** Bootstrap loaded twice, AOS re-init every render, no image `width`/`height` on many images (CLS), no responsive `srcSet`, 6 mp4s shipped from `src`, hero background jpgs uncompressed.
- **Forms:** no real submission adapter, no validation, no success/error states, no honeypot.
- **WhatsApp:** only on the Training page; should be header + footer + considered floating action (best converting channel in this market).
- **Legal:** no privacy, terms, or cookies pages.
- **Error pages:** 404 is a bare image; no 500.
- **Metadata/manifest:** broken `site.webmanifest`, no theme colour, no social image.

## Content that already exists and is an asset (do not discard)
- Real Nigerian/African elderly and caregiver photography (39 images): directly satisfies the brief's hard imagery requirement.
- A genuine caregiver training programme (Training page): feeds both a Careers story and a Journal/credibility angle.
- Clear mission, vision, objectives, and a real registration number: strong raw material for an About and trust strip.

## Open questions for the client (blocking or shaping later phases)
1. **Foundation vs. commercial brand.** The existing entity is a registered *foundation* ("Our Needs: donors, ambulance, land"). The brief asks for a commercial home-care marketing site with Naira pricing and a booking funnel. Which is the primary identity, or do both coexist (foundation arm + paid home-care services arm)? This shapes IA, pricing, and the donate-vs-book CTA hierarchy.
2. **Cities actually served.** Copy only evidences Ibadan. Brief names Lagos, Ibadan, Abuja, Port Harcourt. Confirm real coverage before the map claims it.
3. **Pricing.** Are there real Naira figures/tiers, or should pricing stay "assessment first" with indicative ranges labelled as placeholder?
4. **Logo SVG.** Can the client supply a vector logo? Current best is a 410x432 opaque JPEG / 120x126 transparent PNG.
5. **Testimonials, caregiver bios, journal posts**: all will ship as clearly labelled placeholders in `content/` for one-place swap.
