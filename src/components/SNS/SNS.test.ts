import { experimental_AstroContainer as AstroContainer } from "astro/container";
import { describe, expect, test } from "vitest";

import SNS from "./SNS.astro";
import * as stories from "./story.ts";

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

  describe("Invalid service or ID", () => {
    const invalidProps: { service: string; id: string }[] = [
      { service: "Mastodon", id: "invalid-id" },
      { service: "Misskey", id: "invalid-id" },
      { service: "invalid-service", id: "id" },
    ];

    for (const props of invalidProps) {
      test(props.service, async () => {
        const container: AstroContainer = await AstroContainer.create();

        await expect(
          container.renderToString(SNS, { props }),
        ).rejects.toThrow();
      });
    }
  });
});
