import { motion } from "motion/react";
import { viewportOnce } from "@/lib/motion";
import { processSteps } from "@/content/process";

/**
 * The genuinely-sequential "how it works" flow, rendered as a vertical
 * timeline whose numbered square nodes echo the care spine (docs/DESIGN_SYSTEM
 * section 3). Numbered markers are earned here. The connecting rule draws in
 * on view; reduced motion collapses it to a static line via the global CSS.
 */
export function ProcessTimeline() {
  return (
    <ol className="relative mx-auto max-w-3xl">
      {/* connector */}
      <span
        aria-hidden="true"
        className="absolute bottom-6 left-[19px] top-6 w-px bg-[var(--color-ink-200)]"
      />
      {processSteps.map((step, i) => (
        <motion.li
          key={step.number}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ delay: i * 0.06, duration: 0.32 }}
          className="relative flex gap-5 pb-10 last:pb-0"
        >
          <span
            className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-[6px] bg-[var(--color-brand-400)] font-display text-lg font-semibold text-[var(--color-ink-900)]"
            aria-hidden="true"
          >
            {step.number}
          </span>
          <div className="pt-1">
            <h3 className="text-[1.2rem] font-semibold text-[var(--color-ink-900)]">
              {step.title}
            </h3>
            <p className="mt-2 text-[var(--color-ink-600)]">{step.body}</p>
          </div>
        </motion.li>
      ))}
    </ol>
  );
}
