import sitemap from "@astrojs/sitemap";
import AstroPWA from "@vite-pwa/astro";
import icon from "astro-icon";
import { defineConfig } from "astro/config";
import astrobook from "astrobook";

import meta from "./src/libs/meta.ts";

export default defineConfig({
  site: meta.card.href,
  integrations: [
    sitemap(),
    icon(),
    AstroPWA({
      manifest: {
        name: meta.name,
        short_name: meta.name,
        description: meta.description,
        icons: [{ src: meta.icon.href }],
        orientation: "landscape",
        display: "fullscreen",
        theme_color: "#f4f4f4",
      },
      workbox: {
        globPatterns: ["**/*.{html,js,avif,webp,jpg,woff2}"],
        navigateFallback: "/",
      },
    }),
    ...(process.env.ASTROBOOK
      ? [astrobook({ directory: "src/components" })]
      : []),
  ],
  devToolbar: { enabled: process.env.NODE_ENV !== "test" },
  image: {
    remotePatterns: [
      {
        protocol: meta.icon.protocol.replace(":", ""),
        hostname: meta.icon.hostname,
        pathname: meta.icon.pathname,
      },
    ],
  },
});
