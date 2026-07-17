import { Link } from "react-router";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { WhatsAppButton } from "@/components/WhatsApp";
import { Reveal } from "@/components/ui/Reveal";

type CtaBandProps = {
  title?: string;
  body?: string;
};

/** Final CTA band, reusable across pages. Yellow-on-ink is one of the three
 *  sanctioned yellow moments (docs/DESIGN_SYSTEM section 1). */
export function CtaBand({
  title = "Start with a free care assessment",
  body = "Tell us what your family is facing. We will listen, then recommend only the care you actually need. No charge, no pressure.",
}: CtaBandProps) {
  return (
    <section className="bg-ink-950">
      <Container size="content" className="py-[clamp(3.5rem,7vw,6rem)]">
        <Reveal className="relative overflow-hidden rounded-lg bg-brand-400 px-6 py-12 text-center sm:px-12">
          <h2 className="mx-auto max-w-2xl text-(--text-h2) text-ink-900">
            {title}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-ink-800">
            {body}
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              to="/book-assessment"
              className="inline-flex items-center gap-2 rounded-pill bg-ink-900 px-6 py-3 text-[0.95rem] font-semibold text-white transition-transform duration-[var(--dur-fast)] hover:-translate-y-0.5"
            >
              Book a free assessment
              <ArrowRight size={18} aria-hidden="true" />
            </Link>
            <WhatsAppButton />
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
