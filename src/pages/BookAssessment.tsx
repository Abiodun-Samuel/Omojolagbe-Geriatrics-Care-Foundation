import { ShieldCheck, Clock, HandHeart } from "lucide-react";
import { Seo } from "@/components/Seo";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { BookingForm } from "@/sections/BookingForm";
import { ProcessTimeline } from "@/sections/ProcessTimeline";
import { breadcrumbLd } from "@/lib/jsonld";

const reassurances = [
  {
    icon: HandHeart,
    title: "It is genuinely free",
    body: "No charge, no obligation, no pressure to sign anything.",
  },
  {
    icon: Clock,
    title: "We reply within a working day",
    body: "Urgent situations are prioritised. WhatsApp us if you cannot wait.",
  },
  {
    icon: ShieldCheck,
    title: "Your details stay private",
    body: "Used only to arrange care, shared only with the team providing it.",
  },
];

export function Component() {
  return (
    <>
      <Seo
        title="Book a Free Care Assessment | Omojolagbe Geriatric Care"
        description="Tell us what your family is facing. We will listen, assess honestly, and recommend only the care your loved one actually needs. Free, with no obligation."
        path="/book-assessment"
        jsonLd={[
          breadcrumbLd([
            { name: "Home", path: "/" },
            { name: "Book an assessment", path: "/book-assessment" },
          ]),
        ]}
      />
      <PageHero
        eyebrow="Free care assessment"
        title="Tell us what your family is facing"
        intro="A few questions, then a real conversation. We will be honest about what your loved one needs, even if that is less than you feared."
        crumbs={[{ label: "Book an assessment" }]}
      />

      <Section size="wide">
        <div className="grid items-start gap-10 lg:grid-cols-[1.25fr_0.75fr]">
          <BookingForm />

          <aside className="flex flex-col gap-5">
            {reassurances.map((r) => (
              <div key={r.title} className="flex gap-3">
                <r.icon
                  size={22}
                  className="mt-0.5 shrink-0 text-verify-500"
                  aria-hidden="true"
                />
                <div>
                  <h2 className="font-semibold text-ink-900">{r.title}</h2>
                  <p className="mt-1 text-sm text-ink-600">{r.body}</p>
                </div>
              </div>
            ))}

            <div className="mt-2 rounded-card bg-paper-sunken p-5">
              <h2 className="text-[1.05rem] font-semibold text-ink-900">
                What happens next
              </h2>
              <div className="mt-4">
                <ProcessTimeline />
              </div>
            </div>
          </aside>
        </div>
      </Section>
    </>
  );
}
