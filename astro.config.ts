import type { AstroIntegration } from "astro";
import { defineConfig } from "astro/config";
import astrobook from "astrobook";

const integrations: AstroIntegration[] = [];

if (process.env.ASTROBOOK) {
  integrations.push(astrobook({ directory: "src/components" }));
}

export default defineConfig({ integrations });
