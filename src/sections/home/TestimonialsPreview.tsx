import { Link } from "react-router";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { TestimonialCard } from "@/components/TestimonialCard";
import { sampleTestimonials } from "@/content/testimonials";

export function TestimonialsPreview() {
  return (
    <Section size="wide" ariaLabel="What families say">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <SectionHeading
          eyebrow="What families say"
          title="Trusted by families at home and abroad"
        />
        <Link to="/testimonials" className="btn btn-ghost">
          Read more stories
        </Link>
      </div>
      <RevealGroup className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {sampleTestimonials.map((t) => (
          <RevealItem key={t.id}>
            <TestimonialCard item={t} />
          </RevealItem>
        ))}
      </RevealGroup>
    </Section>
  );
}
