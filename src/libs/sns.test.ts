import { describe, expect, test } from "vitest";

import type { serviceName } from "../constants/sns.ts";
import { getSNS } from "./sns.ts";

const testCases: { given: [serviceName, string]; expected: string }[] = [
  { given: ["Twitter", "twitter"], expected: "https://twitter.com/twitter" },
  {
    given: ["Mastodon", "@Mastodon@mastodon.social"],
    expected: "https://mastodon.social/@Mastodon",
  },
];

describe("getSNS", () => {
  for (const { given, expected } of testCases) {
    test(`Check correct URL for ${given[0]} with ${given[1]}`, () => {
      const result = getSNS(...given);
      expect(result.url).toEqual(expected);
    });
  }
});
