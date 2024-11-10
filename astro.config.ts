import { codecovVitePlugin } from "@codecov/vite-plugin";
import AstroPWA from "@vite-pwa/astro";
import type { AstroIntegration } from "astro";
import icon from "astro-icon";
import { defineConfig } from "astro/config";
import astrobook from "astrobook";

import meta from "./src/libs/meta.ts";

const integrations: AstroIntegration[] = [
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
      maximumFileSizeToCacheInBytes: 1024 * 1024 * 2.2,
      globPatterns: ["**/*.{html,js,woff2}"],
      navigateFallback: "/",
      runtimeCaching: [
        {
          handler: "NetworkFirst",
          options: { cacheName: "icon" },
          urlPattern: () => true,
        },
      ],
    },
  }),
];

if (process.env.ASTROBOOK) {
  integrations.push(astrobook({ directory: "src/components" }));
}

export default defineConfig({
  integrations,
  vite: {
    plugins: [
      codecovVitePlugin({
        enableBundleAnalysis: process.env.CODECOV_TOKEN !== undefined,
        bundleName: "mobicard",
        uploadToken: process.env.CODECOV_TOKEN,
      }),
    ],
  },
});
