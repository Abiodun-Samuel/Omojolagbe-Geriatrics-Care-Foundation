import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { fileURLToPath, URL } from "node:url";

/**
 * Preload the self-hosted fonts.
 *
 * Fontsource ships its @font-face rules inside the CSS, so the browser cannot
 * discover the woff2 files until the stylesheet has downloaded and parsed.
 * That waterfall delays first text paint on a slow connection, which is most
 * of this audience. Filenames are content-hashed at build time, so the
 * preload tags are injected here from the real emitted asset names.
 */
function preloadFonts(): Plugin {
  return {
    name: "preload-fonts",
    apply: "build",
    enforce: "post",
    transformIndexHtml(_html, ctx) {
      const fonts = Object.keys(ctx.bundle ?? {}).filter((f) =>
        f.endsWith(".woff2"),
      );
      return fonts.map((file) => ({
        tag: "link",
        attrs: {
          rel: "preload",
          as: "font",
          type: "font/woff2",
          href: `/${file}`,
          crossorigin: "",
        },
        injectTo: "head-prepend" as const,
      }));
    },
  };
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [["babel-plugin-react-compiler", {}]],
      },
    }),
    tailwindcss(),
    preloadFonts(),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  build: {
    target: "es2022",
    cssCodeSplit: true,
    rollupOptions: {
      output: {
        manualChunks: {
          motion: ["motion"],
        },
      },
    },
  },
});
