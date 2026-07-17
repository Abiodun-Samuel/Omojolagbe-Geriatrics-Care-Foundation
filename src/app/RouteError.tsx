import { Link, useRouteError, isRouteErrorResponse } from "react-router";
import { Container } from "@/components/ui/Container";
import { Seo } from "@/components/Seo";

/** Error boundary, designed with the same care as the rest (Phase 9). */
export function RouteError() {
  const error = useRouteError();
  const is404 = isRouteErrorResponse(error) && error.status === 404;

  const code = is404 ? "404" : "500";
  const heading = is404 ? "We could not find that page" : "Something went wrong";
  const body = is404
    ? "The page you are looking for may have moved. Let us get you back to care."
    : "An unexpected error stopped this page from loading. Please try again, or reach us on WhatsApp and we will help right away.";

  return (
    <>
      <Seo
        title={`${code} | Omojolagbe Geriatric Care`}
        description={heading}
        path="/error"
        noIndex
      />
      <div className="flex min-h-[70vh] items-center py-24">
        <Container size="prose" className="text-center">
          {/* Ink on a yellow block: yellow is a fill, never text weight. */}
          <p className="inline-block rounded-lg bg-brand-400 px-8 py-3 font-display text-[clamp(3.5rem,15vw,7rem)] font-semibold leading-none text-ink-900">
            {code}
          </p>
          <h1 className="mt-4 type-h2">{heading}</h1>
          <p className="measure mx-auto mt-4 text-ink-600">
            {body}
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link to="/" className="btn btn-primary">
              Back to home
            </Link>
            <Link to="/contact" className="btn btn-ghost">
              Contact us
            </Link>
          </div>
        </Container>
      </div>
    </>
  );
}
