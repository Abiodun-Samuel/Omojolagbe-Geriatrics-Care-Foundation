import { Info, Check } from "lucide-react";
import { Seo } from "@/components/Seo";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PricingCard } from "@/components/PricingCard";
import { PlaceholderTag } from "@/components/ui/PlaceholderTag";
import { CtaBand } from "@/sections/CtaBand";
import { pricingPlans, costFactors, fundingNotes } from "@/content/pricing";
import { breadcrumbLd } from "@/lib/jsonld";

export function Component() {
  return (
    <>
      <Seo
        title="Home Care Pricing in Nigeria | Omojolagbe Geriatric Care"
        description="Indicative Naira pricing for visiting, daily and live-in care. What affects cost, what is included, and honest funding and HMO notes. Exact cost after a free assessment."
        path="/pricing"
        jsonLd={[
          breadcrumbLd([
            { name: "Home", path: "/" },
            { name: "Pricing", path: "/pricing" },
          ]),
        ]}
      />
      <PageHero
        eyebrow="Plans and pricing"
        title="What care costs, honestly"
        intro="We publish indicative ranges so you can plan. Your exact cost is confirmed after a free assessment, and you only pay for the care you actually need."
        crumbs={[{ label: "Pricing" }]}
      />

      <Section size="wide">
        <div className="grid gap-5 md:grid-cols-3">
          {pricingPlans.map((plan) => (
            <PricingCard key={plan.id} plan={plan} />
          ))}
        </div>

        <Reveal className="mt-8 flex items-start gap-3 rounded-card bg-paper-sunken p-5">
          <Info
            size={20}
            className="mt-0.5 shrink-0 text-ink-500"
            aria-hidden="true"
          />
          <p className="text-sm text-ink-600">
            These figures are indicative starting points, shown so you can plan.
            They are not a quote. After a free assessment we confirm an exact
            monthly cost in writing.{" "}
            <PlaceholderTag label="Sample figures" />
          </p>
        </Reveal>
      </Section>

      <Section tone="sunken">
        <div className="grid gap-12 lg:grid-cols-2">
          <Reveal>
            <SectionHeading as="h3" title="What affects cost" />
            <ul className="mt-5 space-y-3">
              {costFactors.map((f) => (
                <li key={f} className="flex items-start gap-3">
                  <Check
                    size={18}
                    className="mt-1 shrink-0 text-verify-500"
                    aria-hidden="true"
                  />
                  <span className="text-ink-700">{f}</span>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal>
            <SectionHeading as="h3" title="Paying for care" />
            <ul className="mt-5 space-y-3">
              {fundingNotes.map((n) => (
                <li key={n} className="flex items-start gap-3">
                  <Check
                    size={18}
                    className="mt-1 shrink-0 text-verify-500"
                    aria-hidden="true"
                  />
                  <span className="text-ink-700">{n}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm text-ink-500">
              We will never recommend more care than your family needs. If a
              lighter plan is right, we will say so.
            </p>
          </Reveal>
        </div>
      </Section>

      <CtaBand
        title="Get an exact cost, free"
        body="An assessment costs nothing and puts a real number in front of you, based on what your parent actually needs."
      />
    </>
  );
}
