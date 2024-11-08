import { experimental_AstroContainer as AstroContainer } from "astro/container";
import { describe, expect, test } from "vitest";

import Homepage from "./Homepage.astro";
import type { Props } from "./Homepage.astro";
import * as stories from "./story.ts";

describe("Homepage", () => {
  describe("Valid URL", () => {
    for (const [name, props] of Object.entries(stories)) {
      test(name, async () => {
        const container: AstroContainer = await AstroContainer.create();
        const result: string = await container.renderToString(Homepage, {
          props,
        });
        const url = new URL(props.url);

        expect(result).toContain(
          `> ${encodeURI(url.hostname)}${
            url.pathname === "/" ? "" : url.pathname
          } </span>`,
        );
        expect(result).toContain('<use href="#ai:');
        expect(result).toContain("aria-label");
      });
    }
  });

  test("Invalid URL", async () => {
    const container: AstroContainer = await AstroContainer.create();

    await expect(
      container.renderToString(Homepage, {
        props: { url: "not-valid-url" } satisfies Props,
      }),
    ).rejects.toThrow();
  });
});
