import { motion } from "motion/react";
import { staggerParent, fadeUp, viewportOnce } from "@/lib/motion";
import { processSteps } from "@/content/process";

/**
 * The genuinely-sequential "how it works" flow, rendered as a vertical
 * timeline whose numbered square nodes echo the care spine (docs/DESIGN_SYSTEM
 * section 3). Numbered markers are earned here.
 *
 * The whole list reveals as one group triggered by the <ol> entering view,
 * and the children stagger from that. Each item is NOT independently gated on
 * its own viewport position: in a tall, narrow container (the booking-page
 * sidebar) the last item could otherwise never satisfy the threshold and would
 * stay invisible. Reduced motion collapses the whole thing to a fade via the
 * global CSS.
 */
export function ProcessTimeline() {
  return (
    <motion.ol
      className="relative mx-auto max-w-3xl"
      variants={staggerParent}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
    >
      {/* connector */}
      <span
        aria-hidden="true"
        className="absolute bottom-6 left-[19px] top-6 w-px bg-ink-200"
      />
      {processSteps.map((step) => (
        <motion.li
          key={step.number}
          variants={fadeUp}
          className="relative flex gap-5 pb-10 last:pb-0"
        >
          <span
            className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-[6px] bg-brand-400 font-display text-lg font-semibold text-ink-900"
            aria-hidden="true"
          >
            {step.number}
          </span>
          <div className="pt-1">
            <h3 className="text-[1.2rem] font-semibold text-ink-900">
              {step.title}
            </h3>
            <p className="mt-2 text-ink-600">{step.body}</p>
          </div>
        </motion.li>
      ))}
    </motion.ol>
  );
}
