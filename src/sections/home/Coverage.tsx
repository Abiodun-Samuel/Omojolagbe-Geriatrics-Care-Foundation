import { Link } from "react-router";
import { MapPin, Globe2, ArrowRight } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";

const cities = [
  { name: "Ibadan", status: "Serving now" },
  { name: "Lagos", status: "Expanding" },
  { name: "Abuja", status: "Expanding" },
  { name: "Port Harcourt", status: "Expanding" },
];

export function Coverage() {
  return (
    <Section size="wide" ariaLabel="Where we care">
      <SectionHeading
        eyebrow="Where we care"
        title="Rooted in Ibadan, reaching further"
        intro="We provide care in Ibadan today and are expanding across Nigeria. Wherever your parent is, we can talk about how to help."
      />

      <div className="mt-10 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <ul className="grid gap-4 sm:grid-cols-2">
          {cities.map((c) => (
            <li key={c.name} className="card flex items-center gap-3 p-5">
              <MapPin
                size={22}
                className="shrink-0 text-brand-600"
                aria-hidden="true"
              />
              <div>
                <p className="font-semibold text-ink-900">
                  {c.name}
                </p>
                <p className="text-sm text-ink-600">
                  {c.status}
                </p>
              </div>
            </li>
          ))}
        </ul>

        {/* Diaspora panel: our differentiator (Phase 1). */}
        <div className="flex flex-col rounded-card bg-ink-900 p-7 text-white">
          <Globe2
            size={30}
            className="text-brand-400"
            aria-hidden="true"
          />
          <h3 className="mt-4 text-(--text-h3) text-white">
            Living abroad? Arrange care for your parents from anywhere.
          </h3>
          <p className="mt-3 text-white/70">
            Set up reliable, reported home care for a parent in Nigeria, pay in
            Naira from abroad, and reach us on WhatsApp across time zones.
          </p>
          <Link
            to="/diaspora"
            className="mt-6 inline-flex w-fit items-center gap-2 font-semibold text-brand-400 hover:underline"
          >
            For diaspora families
            <ArrowRight size={18} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </Section>
  );
}
