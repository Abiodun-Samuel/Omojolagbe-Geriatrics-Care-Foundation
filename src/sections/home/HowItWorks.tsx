import { Link } from "react-router";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProcessTimeline } from "@/sections/ProcessTimeline";

export function HowItWorks() {
  return (
    <Section ariaLabel="How it works">
      <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <SectionHeading
            eyebrow="How it works"
            title="Five steps from worry to steady care"
            intro="A clear, honest process. You always know what happens next and who is responsible."
          />
          <Link to="/how-it-works" className="btn btn-ghost mt-8">
            See the full process
          </Link>
        </div>
        <ProcessTimeline />
      </div>
    </Section>
  );
}
