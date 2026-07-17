import { Seo } from "@/components/Seo";
import { NotFoundBody } from "@/components/NotFoundBody";

export function Component() {
  return (
    <>
      <Seo
        title="Page not found | Omojolagbe Geriatric Care"
        description="We could not find that page. Let us get you back to care."
        path="/404"
        noIndex
      />
      <NotFoundBody />
    </>
  );
}
