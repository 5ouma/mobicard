/// <reference types="vitest" />

import { getViteConfig } from "astro/config";
import type { UserConfig } from "vite";
import { coverageConfigDefaults } from "vitest/config";

const vitestConfig: Parameters<typeof getViteConfig>[0] & {
  test: NonNullable<UserConfig["test"]>;
} = {
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
};

export default getViteConfig(vitestConfig);
