import { LegalPage } from "@/sections/LegalPage";
import { cookiesDoc } from "@/content/legal";

export function Component() {
  return <LegalPage doc={cookiesDoc} path="/cookies" />;
}
