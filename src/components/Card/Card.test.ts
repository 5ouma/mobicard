import { experimental_AstroContainer as AstroContainer } from "astro/container";
import { describe, expect, test } from "vitest";

import Card from "./Card.astro";
import * as stories from "./stories.ts";

describe("Card", () => {
  for (const [name, props] of Object.entries(stories)) {
    test(name, async () => {
      const container: AstroContainer = await AstroContainer.create();
      const result: string = await container.renderToString(Card, {
        props,
      });

      expect(result).toMatchSnapshot();
    });
  }
});
