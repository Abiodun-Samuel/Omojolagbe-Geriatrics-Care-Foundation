import { LegalPage } from "@/sections/LegalPage";
import { termsDoc } from "@/content/legal";

export function Component() {
  return <LegalPage doc={termsDoc} path="/terms" />;
}
