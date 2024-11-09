import { codecovVitePlugin } from "@codecov/vite-plugin";
import type { AstroIntegration } from "astro";
import icon from "astro-icon";
import { defineConfig } from "astro/config";
import astrobook from "astrobook";

const integrations: AstroIntegration[] = [icon()];

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
