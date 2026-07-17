import { Link } from "react-router";
import { Container } from "@/components/ui/Container";

/** Shared 404 body, used by the /404 route and by detail pages with an
 *  unknown slug. Designed with the same care as the home page (Phase 4). */
export function NotFoundBody() {
  return (
    <div className="flex min-h-[70vh] items-center py-24">
      <Container size="prose" className="text-center">
        {/* Ink on a yellow block: yellow can never carry text weight itself
            (1.07:1 on paper), so it sits behind the numeral as a fill. */}
        <p className="inline-block rounded-lg bg-brand-400 px-8 py-3 font-display text-[clamp(3.5rem,15vw,7rem)] font-semibold leading-none text-ink-900">
          404
        </p>
        <h1 className="mt-4 type-h2">
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
