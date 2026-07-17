import { Link } from "react-router";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { PricingCard } from "@/components/PricingCard";
import { pricingPlans } from "@/content/pricing";

export function PricingPreview() {
  return (
    <Section tone="sunken" size="wide" ariaLabel="Care plans and pricing">
      <SectionHeading
        align="center"
        eyebrow="Plans and pricing"
        title="Honest, indicative pricing"
        intro="These are starting ranges to help you plan. Your exact cost is confirmed after a free assessment, so you only ever pay for the care you actually need."
      />
      <RevealGroup className="mx-auto mt-10 grid max-w-5xl gap-5 md:grid-cols-3">
        {pricingPlans.map((plan) => (
          <RevealItem key={plan.id}>
            <PricingCard plan={plan} />
          </RevealItem>
        ))}
      </RevealGroup>
      <p className="mt-8 text-center">
        <Link
          to="/pricing"
          className="font-semibold text-brand-800 hover:underline"
        >
          See what affects cost and funding options
        </Link>
      </p>
    </Section>
  );
}
