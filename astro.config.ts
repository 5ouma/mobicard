import sitemap from "@astrojs/sitemap";
import AstroPWA from "@vite-pwa/astro";
import { defineConfig } from "astro/config";
import icon from "astro-icon";
import astrobook from "astrobook";

import meta from "./src/libs/meta.ts";

const iconURL = new URL(meta.icon);

export default defineConfig({
  site: meta.card,
  integrations: [
    sitemap(),
    icon(),
    AstroPWA({
      manifest: {
        name: meta.name,
        short_name: meta.name,
        description: meta.description,
        icons: [{ src: meta.icon }],
        orientation: "landscape",
        display: "fullscreen",
        theme_color: "#f4f4f4",
      },
      workbox: {
        maximumFileSizeToCacheInBytes: process.env.ASTROBOOK
          ? 1024 * 1024 * 8
          : 2097152,
        globPatterns: ["**/*.{html,js,avif,webp,jpg}"],
        navigateFallback: "/",
      },
    }),
    process.env.ASTROBOOK ? [astrobook({ directory: "src/components" })] : null,
  ],
  devToolbar: { enabled: process.env.NODE_ENV !== "test" },
  image: {
    remotePatterns: [
      {
        protocol: iconURL.protocol.replace(":", ""),
        hostname: iconURL.hostname,
        pathname: iconURL.pathname,
      },
    ],
  },
});
