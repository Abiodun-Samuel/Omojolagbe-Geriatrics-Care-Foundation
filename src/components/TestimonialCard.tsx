import { Quote } from "lucide-react";
import type { Testimonial } from "@/content/testimonials";
import { PlaceholderTag } from "@/components/ui/PlaceholderTag";

export function TestimonialCard({ item }: { item: Testimonial }) {
  return (
    <figure className="card flex h-full flex-col p-6">
      <Quote
        size={26}
        className="text-brand-500"
        aria-hidden="true"
      />
      <blockquote className="mt-3 flex-1 text-ink-800">
        {item.quote}
      </blockquote>
      <figcaption className="mt-5 border-t border-ink-200 pt-4">
        <p className="font-semibold text-ink-900">
          {item.name}
        </p>
        <p className="text-sm text-ink-600">
          {item.relationship} &middot; {item.city}
        </p>
        {item.placeholder && (
          <PlaceholderTag className="mt-3" label="Sample testimonial" />
        )}
      </figcaption>
    </figure>
  );
}
