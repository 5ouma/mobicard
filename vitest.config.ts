/// <reference types="vitest" />

import { getViteConfig } from "astro/config";

export default getViteConfig({
  test: {
    reporters: ["verbose", ["junit", { suiteName: "Component Tests" }]],
    outputFile: "junit.xml",
  },
});
