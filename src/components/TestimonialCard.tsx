import { Quote } from "lucide-react";
import type { Testimonial } from "@/content/testimonials";
import { PlaceholderTag } from "@/components/ui/PlaceholderTag";

export function TestimonialCard({ item }: { item: Testimonial }) {
  return (
    <figure className="card flex h-full flex-col p-6">
      <Quote
        size={26}
        className="text-[var(--color-brand-500)]"
        aria-hidden="true"
      />
      <blockquote className="mt-3 flex-1 text-[var(--color-ink-800)]">
        {item.quote}
      </blockquote>
      <figcaption className="mt-5 border-t border-[var(--color-ink-200)] pt-4">
        <p className="font-semibold text-[var(--color-ink-900)]">
          {item.name}
        </p>
        <p className="text-sm text-[var(--color-ink-600)]">
          {item.relationship} &middot; {item.city}
        </p>
        {item.placeholder && (
          <PlaceholderTag className="mt-3" label="Sample testimonial" />
        )}
      </figcaption>
    </figure>
  );
}
