import { createBrowserRouter } from "react-router";
import { RootLayout } from "@/app/RootLayout";
import { RouteError } from "@/app/RouteError";
import { RouteFallback } from "@/app/RouteFallback";
import Home from "@/pages/Home";

/**
 * react-router v7 declarative mode with nested layout and scroll restoration.
 * Home is eager (LCP route); everything else is route-level code split.
 */
export const router = createBrowserRouter([
  {
    element: <RootLayout />,
    errorElement: <RouteError />,
    // Shown while a lazy route chunk loads on first paint.
    HydrateFallback: RouteFallback,
    children: [
      { index: true, element: <Home /> },
      { path: "about", lazy: () => import("@/pages/About") },
      { path: "services", lazy: () => import("@/pages/Services") },
      { path: "services/:slug", lazy: () => import("@/pages/ServiceDetail") },
      {
        path: "who-we-care-for",
        lazy: () => import("@/pages/WhoWeCareFor"),
      },
      {
        path: "who-we-care-for/:slug",
        lazy: () => import("@/pages/ConditionDetail"),
      },
      { path: "how-it-works", lazy: () => import("@/pages/HowItWorks") },
      { path: "caregivers", lazy: () => import("@/pages/Caregivers") },
      { path: "pricing", lazy: () => import("@/pages/Pricing") },
      { path: "diaspora", lazy: () => import("@/pages/Diaspora") },
      {
        path: "book-assessment",
        lazy: () => import("@/pages/BookAssessment"),
      },
      { path: "testimonials", lazy: () => import("@/pages/Testimonials") },
      { path: "faq", lazy: () => import("@/pages/Faq") },
      { path: "journal", lazy: () => import("@/pages/Journal") },
      { path: "journal/:slug", lazy: () => import("@/pages/JournalPost") },
      { path: "careers", lazy: () => import("@/pages/Careers") },
      { path: "careers/:slug", lazy: () => import("@/pages/CareerDetail") },
      { path: "contact", lazy: () => import("@/pages/Contact") },
      { path: "gallery", lazy: () => import("@/pages/Gallery") },
      { path: "privacy", lazy: () => import("@/pages/Privacy") },
      { path: "terms", lazy: () => import("@/pages/Terms") },
      { path: "cookies", lazy: () => import("@/pages/Cookies") },
      { path: "*", lazy: () => import("@/pages/NotFound") },
    ],
  },
]);
