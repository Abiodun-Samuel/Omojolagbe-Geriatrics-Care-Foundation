import { motion } from "motion/react";
import { Link } from "react-router";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SmartImage } from "@/components/ui/SmartImage";
import { WhatsAppButton } from "@/components/WhatsApp";
import { media } from "@/content/media";
import { easeBrand } from "@/lib/motion";

/**
 * The flagship hero: a thesis, not a slideshow (Phase 1: things we will not
 * do). One orchestrated load sequence. Text is in the DOM immediately and is
 * readable before motion completes; only transform/opacity animate.
 * H01 ("Best Home Care & Services Provider") is preserved as the eyebrow so
 * the original positioning line is not lost.
 */
export function Hero() {
  const container = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
  };
  const item = {
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.56, ease: easeBrand },
    },
  };

  return (
    <section className="relative overflow-hidden bg-[var(--color-paper)] pb-[clamp(3rem,6vw,6rem)] pt-[clamp(2rem,5vw,4rem)]">
      <Container size="wide">
        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <motion.div variants={container} initial="hidden" animate="visible">
            <motion.p
              variants={item}
              className="eyebrow inline-flex items-center gap-2"
            >
              <span
                className="inline-block h-2 w-2"
                style={{ background: "var(--color-brand-400)" }}
                aria-hidden="true"
              />
              Best Home Care &amp; Services Provider
            </motion.p>

            <motion.h1
              variants={item}
              className="mt-5 text-[var(--text-hero)] leading-[0.98] tracking-[-0.02em]"
            >
              Care your parents can feel, that you can see.
            </motion.h1>

            <motion.p
              variants={item}
              className="measure-lead mt-6 text-[var(--text-lead)] text-[var(--color-ink-600)]"
            >
              Compassionate home care for elderly Nigerians. Vetted caregivers
              and licensed nurses in Ibadan, arranged from home or from abroad,
              with a report after every visit.
            </motion.p>

            <motion.div
              variants={item}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <Link to="/book-assessment" className="btn btn-primary">
                Book a free care assessment
                <ArrowRight size={18} aria-hidden="true" />
              </Link>
              <WhatsAppButton message="Hello Omojolagbe Care, I would like to arrange home care for my parent." />
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: easeBrand, delay: 0.15 }}
            className="relative"
          >
            <SmartImage
              media={media.heroPrimary}
              priority
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="shadow-[var(--shadow-pop)]"
            />
            <div className="card absolute -bottom-5 -left-4 hidden max-w-[15rem] p-4 sm:block">
              <p className="text-sm font-semibold text-[var(--color-ink-900)]">
                A report after every visit
              </p>
              <p className="mt-1 text-sm text-[var(--color-ink-600)]">
                So a family member anywhere always knows how their parent is
                doing.
              </p>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
