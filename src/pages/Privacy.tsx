import { LegalPage } from "@/sections/LegalPage";
import { privacyDoc } from "@/content/legal";

export function Component() {
  return <LegalPage doc={privacyDoc} path="/privacy" />;
}
