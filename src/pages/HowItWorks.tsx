import { Seo } from "@/components/Seo";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProcessTimeline } from "@/sections/ProcessTimeline";
import { CtaBand } from "@/sections/CtaBand";
import { breadcrumbLd } from "@/lib/jsonld";
import { ClipboardList, FileText, Eye } from "lucide-react";

const promises = [
  {
    icon: ClipboardList,
    title: "You are assessed, not sold to",
    body: "The assessment is free and honest. If you need less care than you feared, we will tell you.",
  },
  {
    icon: FileText,
    title: "The plan is written down",
    body: "Care is not left to memory. You get a plan that says what happens, when and by whom.",
  },
  {
    icon: Eye,
    title: "You can see the care",
    body: "Reports after visits mean distance never means guesswork.",
  },
];

export function Component() {
  return (
    <>
      <Seo
        title="How Our Home Care Works | Omojolagbe Geriatric Care"
        description="Assessment, caregiver matching, a written care plan, ongoing supervision and family reporting. Five clear steps from worry to steady care."
        path="/how-it-works"
        jsonLd={[
          breadcrumbLd([
            { name: "Home", path: "/" },
            { name: "How it works", path: "/how-it-works" },
          ]),
        ]}
      />
      <PageHero
        eyebrow="How it works"
        title="Five steps from worry to steady care"
        intro="No mystery, no pressure. Here is exactly what happens from your first call to ongoing care."
        crumbs={[{ label: "How it works" }]}
      />

      <Section>
        <ProcessTimeline />
      </Section>

      <Section tone="sunken" size="wide">
        <SectionHeading
          align="center"
          eyebrow="What we promise"
          title="What you can hold us to"
        />
        <div className="mx-auto mt-10 grid max-w-5xl gap-5 md:grid-cols-3">
          {promises.map((p) => (
            <Reveal key={p.title} className="card p-6">
              <p.icon
                size={24}
                className="text-verify-500"
                aria-hidden="true"
              />
              <h3 className="mt-4 text-[1.1rem] font-semibold text-ink-900">
                {p.title}
              </h3>
              <p className="mt-2 text-sm text-ink-600">{p.body}</p>
            </Reveal>
          ))}
        </div>
      </Section>

      <CtaBand />
    </>
  );
}
