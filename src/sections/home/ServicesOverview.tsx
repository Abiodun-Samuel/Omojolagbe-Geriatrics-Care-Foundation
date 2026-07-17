import { Link } from "react-router";
import { ArrowRight } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { ServiceCard } from "@/components/ServiceCard";
import { services } from "@/content/services";

export function ServicesOverview() {
  const featured = services.slice(0, 6);
  return (
    <Section size="wide" ariaLabel="Our services">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <SectionHeading
          eyebrow="What we do"
          title="Care built around the person, not the task"
          intro="From a hand with daily living to skilled nursing at home, every service runs on the same standard of vetting, supervision and reporting."
        />
        <Link
          to="/services"
          className="inline-flex items-center gap-1 font-semibold text-brand-800 hover:underline"
        >
          All services
          <ArrowRight size={16} aria-hidden="true" />
        </Link>
      </div>

      <RevealGroup className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {featured.map((service) => (
          <RevealItem key={service.slug}>
            <ServiceCard service={service} />
          </RevealItem>
        ))}
      </RevealGroup>
    </Section>
  );
}
