import { Link } from "react-router";
import { ArrowUpRight } from "lucide-react";
import type { Service } from "@/content/services";

export function ServiceCard({ service }: { service: Service }) {
  return (
    <Link
      to={`/services/${service.slug}`}
      className="card group flex flex-col p-6 transition-[transform,box-shadow] duration-[var(--dur-fast)] hover:-translate-y-1 hover:shadow-[var(--shadow-pop)]"
    >
      <span
        className="inline-flex h-11 w-11 items-center justify-center rounded-[var(--radius-sm)] bg-[var(--color-brand-100)]"
        aria-hidden="true"
      >
        <service.icon size={22} className="text-[var(--color-ink-900)]" />
      </span>
      <h3 className="mt-4 text-[1.15rem] font-semibold text-[var(--color-ink-900)]">
        {service.name}
      </h3>
      <p className="mt-2 flex-1 text-sm text-[var(--color-ink-600)]">
        {service.summary}
      </p>
      <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-[var(--color-brand-800)]">
        Learn more
        <ArrowUpRight
          size={16}
          className="transition-transform duration-[var(--dur-fast)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          aria-hidden="true"
        />
      </span>
    </Link>
  );
}
