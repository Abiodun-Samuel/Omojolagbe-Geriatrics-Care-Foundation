import { StrictMode } from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import { RouterProvider } from "react-router/dom";
import { router } from "@/app/router";
import "@/styles/index.css";

const rootEl = document.getElementById("root");
if (!rootEl) throw new Error("Root element #root not found");

const app = (
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

// scripts/prerender.ts writes real markup into #root at build time so the
// page paints before any JS runs. Hydrate that markup when it is there, and
// fall back to a normal client render in dev or if a route was not prerendered.
if (rootEl.hasChildNodes()) {
  hydrateRoot(rootEl, app);
} else {
  createRoot(rootEl).render(app);
}
