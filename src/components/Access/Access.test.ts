import { experimental_AstroContainer as AstroContainer } from "astro/container";
import { describe, expect, test } from "vitest";

import Access from "./Access.astro";
import * as stories from "./stories.ts";

describe("Access", () => {
  for (const [name, props] of Object.entries(stories)) {
    test(name, async () => {
      const container: AstroContainer = await AstroContainer.create();
      const result: string = await container.renderToString(Access, {
        props,
      });

      expect(result).toMatchSnapshot();
    });
  }
});
