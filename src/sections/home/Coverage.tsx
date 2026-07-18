import { Link } from "react-router";
import { MapPin, Globe2, ArrowRight } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { contactNarrative } from "@/content/about";
import { serviceAreas } from "@/content/coverage";

export function Coverage() {
  return (
    <Section size="wide" ariaLabel="Where we care">
      <SectionHeading
        eyebrow="Where we care"
        title="Home care across Ibadan"
        intro={contactNarrative}
      />

      {/* C08 preserved verbatim. */}
      <Reveal className="mt-6">
        <Link
          to="/contact"
          className="cursor-pointer font-semibold text-brand-800 hover:underline"
        >
          Contact Us Now &#8594;
        </Link>
      </Reveal>

      <div className="mt-10 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="text-sm font-semibold text-ink-800">
            Areas we cover in and around Ibadan
          </p>
          <ul className="mt-4 flex flex-wrap gap-2.5">
            {serviceAreas.map((area) => (
              <li
                key={area}
                className="inline-flex items-center gap-1.5 rounded-pill bg-paper-raised px-3.5 py-1.5 text-sm text-ink-700 shadow-card"
              >
                <MapPin
                  size={14}
                  className="shrink-0 text-brand-600"
                  aria-hidden="true"
                />
                {area}
              </li>
            ))}
          </ul>
          <p className="mt-5 text-sm text-ink-600">
            Not sure if we reach your area?{" "}
            <Link
              to="/contact"
              className="cursor-pointer font-semibold text-brand-800 hover:underline"
            >
              Ask us
            </Link>
            . If you are in Ibadan, we can almost certainly help.
          </p>
        </div>

        {/* Diaspora panel: our differentiator (Phase 1). */}
        <div className="flex flex-col rounded-card bg-ink-900 p-7 text-white">
          <Globe2 size={30} className="text-brand-400" aria-hidden="true" />
          <h3 className="mt-4 type-h3 text-white">
            Living abroad? Arrange care for your parents in Ibadan.
          </h3>
          <p className="mt-3 text-white/70">
            Set up reliable, reported home care for a parent in Ibadan, pay in
            Naira from abroad, and reach us on WhatsApp across time zones.
          </p>
          <Link
            to="/diaspora"
            className="mt-6 inline-flex w-fit cursor-pointer items-center gap-2 font-semibold text-brand-400 hover:underline"
          >
            For diaspora families
            <ArrowRight size={18} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </Section>
  );
}
