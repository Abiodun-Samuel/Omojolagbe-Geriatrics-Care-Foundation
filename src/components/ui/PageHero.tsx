import type { ReactNode } from "react";
import { Link } from "react-router";
import { ChevronRight } from "lucide-react";
import { Container } from "@/components/ui/Container";

type Crumb = { label: string; to?: string };

type PageHeroProps = {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  crumbs?: Crumb[];
  children?: ReactNode;
};

/** Interior-page hero on a dark band (an intentional dark punctuation, not a
 *  theme). Carries the breadcrumb that the original site used ("Home / X"). */
export function PageHero({
  eyebrow,
  title,
  intro,
  crumbs = [],
  children,
}: PageHeroProps) {
  return (
    <section className="bg-[var(--color-ink-900)] text-white">
      <Container size="wide" className="py-16 md:py-24">
        <nav aria-label="Breadcrumb">
          <ol className="flex flex-wrap items-center gap-1.5 text-sm text-white/60">
            <li>
              <Link to="/" className="hover:text-[var(--color-brand-300)]">
                Home
              </Link>
            </li>
            {crumbs.map((c) => (
              <li key={c.label} className="flex items-center gap-1.5">
                <ChevronRight size={14} aria-hidden="true" />
                {c.to ? (
                  <Link
                    to={c.to}
                    className="hover:text-[var(--color-brand-300)]"
                  >
                    {c.label}
                  </Link>
                ) : (
                  <span className="text-white/80" aria-current="page">
                    {c.label}
                  </span>
                )}
              </li>
            ))}
          </ol>
        </nav>

        {eyebrow && (
          <p className="eyebrow mt-6 text-[var(--color-brand-300)]">
            {eyebrow}
          </p>
        )}
        <h1 className="mt-3 max-w-4xl text-[var(--text-h1)] text-white">
          {title}
        </h1>
        {intro && (
          <p className="mt-5 max-w-2xl text-[var(--text-lead)] text-white/75">
            {intro}
          </p>
        )}
        {children && <div className="mt-8">{children}</div>}
      </Container>
    </section>
  );
}
