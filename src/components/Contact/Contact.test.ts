import { experimental_AstroContainer as AstroContainer } from "astro/container";
import { describe, expect, test } from "vitest";

import Contact from "./Contact.astro";
import * as stories from "./story.ts";

describe("Contact", () => {
  for (const [name, props] of Object.entries(stories)) {
    test(name, async () => {
      const container: AstroContainer = await AstroContainer.create();
      const result: string = await container.renderToString(Contact, { props });

      expect(result).toContain(`>${props.id}</span>`);
    });
  }
});
