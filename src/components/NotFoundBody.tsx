import { Link } from "react-router";
import { Container } from "@/components/ui/Container";

/** Shared 404 body, used by the /404 route and by detail pages with an
 *  unknown slug. Designed with the same care as the home page (Phase 4). */
export function NotFoundBody() {
  return (
    <div className="flex min-h-[70vh] items-center py-24">
      <Container size="prose" className="text-center">
        <p
          className="font-display text-[clamp(4rem,18vw,9rem)] font-semibold leading-none text-brand-400"
          style={{ WebkitTextStroke: "1px var(--color-ink-900)" }}
        >
          404
        </p>
        <h1 className="mt-4 text-(--text-h2)">
          We could not find that page
        </h1>
        <p className="measure mx-auto mt-4 text-ink-600">
          The page you are looking for may have moved. Let us get you back to
          care.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link to="/" className="btn btn-primary">
            Back to home
          </Link>
          <Link to="/services" className="btn btn-ghost">
            Browse services
          </Link>
        </div>
      </Container>
    </div>
  );
}
