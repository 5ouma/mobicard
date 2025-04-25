import { safeParse } from "valibot";
import { describe, expect, test } from "vitest";

import { metaSchema } from "./meta.ts";

describe("Meta Schema", () => {
  test("Valid site metadata", () => {
    const site = {
      name: "Site Name",
      description: "Site description",
      icon: "https://example.com/icon.png",
      homepage: "https://example.com",
      email: "email@example.com",
      sns: [
        { service: "Twitter", id: "twitter" },
        { service: "GitHub", id: "github" },
      ],
      card: "https://example.com",
    };

    const result = safeParse(metaSchema, site);
    expect(result.success).toEqual(true);
  });

  test("Invalid site metadata", () => {
    const site = {
      name: "",
      description: "Site description",
      icon: "invalid-url",
      homepage: "invalid-url",
      email: "invalid-email",
      sns: [],
      card: "",
    };

    const result = safeParse(metaSchema, site);
    expect(result.success).toEqual(false);
  });
});
