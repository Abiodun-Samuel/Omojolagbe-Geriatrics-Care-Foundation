import { Link } from "react-router";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { CaregiverCard } from "@/components/CaregiverCard";
import { sampleCaregivers } from "@/content/caregivers";

export function CaregiversPreview() {
  return (
    <Section size="wide" ariaLabel="Meet the caregivers">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <SectionHeading
          eyebrow="Meet the caregivers"
          title="The people who will be in your parent's home"
          intro="Every caregiver is vetted, trained and supervised. Here is a sense of the team, with real profiles to follow."
        />
        <Link to="/caregivers" className="btn btn-ghost">
          Our vetting standards
        </Link>
      </div>
      <RevealGroup className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {sampleCaregivers.map((c) => (
          <RevealItem key={c.id}>
            <CaregiverCard caregiver={c} />
          </RevealItem>
        ))}
      </RevealGroup>
    </Section>
  );
}
