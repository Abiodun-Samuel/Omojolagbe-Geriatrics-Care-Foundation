import { Link } from "react-router";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Accordion } from "@/components/ui/Accordion";
import { faqItems } from "@/content/faq";

export function FaqPreview() {
  const top = faqItems.slice(0, 6);
  return (
    <Section ariaLabel="Frequently asked questions">
      <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <SectionHeading
            eyebrow="Questions"
            title="Answers to what families ask first"
            intro="Still unsure? Ask us on WhatsApp and a real person will help."
          />
          <Link to="/faq" className="btn btn-ghost mt-8">
            See all questions
          </Link>
        </div>
        <Accordion items={top.map(({ q, a }) => ({ q, a }))} />
      </div>
    </Section>
  );
}
