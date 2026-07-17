import { Link } from "react-router";
import { Check } from "lucide-react";
import type { PricingPlan } from "@/content/pricing";
import { PlaceholderTag } from "@/components/ui/PlaceholderTag";
import { cn } from "@/lib/cn";

const naira = new Intl.NumberFormat("en-NG", {
  style: "currency",
  currency: "NGN",
  maximumFractionDigits: 0,
});

export function PricingCard({ plan }: { plan: PricingPlan }) {
  return (
    <div
      className={cn(
        "flex h-full flex-col rounded-card p-6",
        plan.featured
          ? "bg-ink-900 text-white shadow-pop"
          : "card",
      )}
    >
      <div className="flex items-center justify-between">
        <h3
          className={cn(
            "text-[1.2rem] font-semibold",
            plan.featured ? "text-white" : "text-ink-900",
          )}
        >
          {plan.name}
        </h3>
        {plan.featured && (
          <span className="chip bg-brand-400 text-ink-900">
            Most chosen
          </span>
        )}
      </div>

      <p
        className={cn(
          "mt-2 text-sm",
          plan.featured ? "text-white/70" : "text-ink-600",
        )}
      >
        {plan.summary}
      </p>

      <p className="mt-5">
        <span
          className={cn(
            "text-sm",
            plan.featured ? "text-white/60" : "text-ink-500",
          )}
        >
          From{" "}
        </span>
        <span
          className={cn(
            "font-display text-[2rem] font-semibold tnum",
            plan.featured ? "text-white" : "text-ink-900",
          )}
        >
          {naira.format(plan.fromNaira)}
        </span>
        <span
          className={cn(
            "text-sm",
            plan.featured ? "text-white/60" : "text-ink-500",
          )}
        >
          {" "}
          {plan.cadence}
        </span>
      </p>

      <ul className="mt-5 flex-1 space-y-2.5">
        {plan.includes.map((inc) => (
          <li key={inc} className="flex items-start gap-2 text-sm">
            <Check
              size={17}
              className={cn(
                "mt-0.5 shrink-0",
                plan.featured
                  ? "text-brand-400"
                  : "text-verify-500",
              )}
              aria-hidden="true"
            />
            <span className={plan.featured ? "text-white/85" : undefined}>
              {inc}
            </span>
          </li>
        ))}
      </ul>

      <Link
        to="/book-assessment"
        className={cn(
          "btn mt-6 w-full",
          plan.featured ? "btn-primary" : "btn-ghost",
        )}
      >
        Book a free assessment
      </Link>
      {plan.placeholder && (
        <PlaceholderTag className="mt-3 self-center" label="Indicative price" />
      )}
    </div>
  );
}
