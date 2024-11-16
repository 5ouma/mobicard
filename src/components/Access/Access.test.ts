import { experimental_AstroContainer as AstroContainer } from "astro/container";
import { describe, expect, test } from "vitest";

import Access from "./Access.astro";
import type { Props } from "./Access.astro";
import * as stories from "./story.ts";

describe("Access", () => {
  describe("Valid URL", () => {
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

  test("Invalid URL", async () => {
    const container: AstroContainer = await AstroContainer.create();

    await expect(
      container.renderToString(Access, {
        props: {
          homepage: "not-valid-url",
          email: "email@www.example.com",
        } satisfies Props,
      }),
    ).rejects.toThrow();
  });

  test("Without Email", async () => {
    const container: AstroContainer = await AstroContainer.create();

    await expect(
      container.renderToString(Access, {
        props: { homepage: "not-valid-url" } satisfies Props,
      }),
    ).rejects.toThrow();
  });
});
