import { experimental_AstroContainer as AstroContainer } from "astro/container";
import { describe, expect, test } from "vitest";

import Contact from "./Contact.astro";
import * as stories from "./story.ts";

describe("Contact", () => {
  describe("Valid service and ID", () => {
    for (const [name, props] of Object.entries(stories)) {
      test(name, async () => {
        const container: AstroContainer = await AstroContainer.create();
        const result: string = await container.renderToString(Contact, {
          props,
        });

        expect(result).toMatchSnapshot();
      });
    }
  });

  describe("Invalid service or ID", () => {
    const invalidProps: { service: string; id: string }[] = [
      { service: "Mastodon", id: "invalid-id" },
      { service: "Misskey", id: "invalid-id" },
      { service: "invalid-service", id: "id" },
    ];

    for (const [_, props] of Object.entries(invalidProps)) {
      test(props.service, async () => {
        const container: AstroContainer = await AstroContainer.create();

        await expect(
          container.renderToString(Contact, { props }),
        ).rejects.toThrow();
      });
    }
  });
});
