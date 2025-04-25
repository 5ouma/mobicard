import { experimental_AstroContainer as AstroContainer } from "astro/container";
import { describe, expect, test } from "vitest";

import SNS from "./SNS.astro";
import * as stories from "./stories.ts";

describe("SNS", () => {
  describe("Valid service and ID", () => {
    for (const [name, props] of Object.entries(stories)) {
      test(name, async () => {
        const container: AstroContainer = await AstroContainer.create();
        const result: string = await container.renderToString(SNS, {
          props,
        });

        expect(result).toMatchSnapshot();
      });
    }
  });
});
