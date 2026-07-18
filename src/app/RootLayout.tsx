import { Outlet, ScrollRestoration } from "react-router";
import { MotionConfig } from "motion/react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppFab } from "@/components/WhatsApp";

/** App shell: one place for landmarks, the skip link and the FAB. */
export function RootLayout() {
  return (
    <MotionConfig reducedMotion="user">
      <a
        href="#main"
        className="sr-only rounded-sm bg-ink-900 px-4 py-2 font-semibold text-white focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50"
      >
        Skip to content
      </a>

      <Header />

      <main id="main" className="pt-16 md:pt-20">
        <Outlet />
      </main>

      <Footer />
      <WhatsAppFab />
      <ScrollRestoration />
    </MotionConfig>
  );
}
