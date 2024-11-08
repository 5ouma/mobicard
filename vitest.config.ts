/// <reference types="vitest" />

import { getViteConfig } from "astro/config";
import { coverageConfigDefaults } from "vitest/config";

export default getViteConfig({
  test: {
    reporters: ["verbose", ["junit", { suiteName: "Component Tests" }]],
    outputFile: "junit.xml",
    coverage: {
      exclude: [
        "astro.config.ts",
        "src/pages/",
        "src/layouts/",
        "**/*.stories.ts",
        ...coverageConfigDefaults.exclude,
      ],
    },
  },
});
