import { safeParse } from "valibot";
import { describe, expect, test } from "vitest";

import * as stories from "../components/SNS/stories.ts";
import { schemas, serviceSchema } from "./sns.ts";

const invalidTestCases = [
  { schema: schemas.userName, value: "invalid username" },
  { schema: schemas.userName, value: "" },
  { schema: schemas.domain, value: "invalid-domain" },
  { schema: schemas.domain, value: "" },
  { schema: schemas.activityPub, value: "invalid-id" },
  { schema: schemas.activityPub, value: "@invalid-id" },
  { schema: schemas.activityPub, value: "@id@invalid-domain" },
  { schema: schemas.activityPub, value: "invalid-id@example.com" },
  { schema: schemas.activityPub, value: "" },
  { schema: schemas.atMarkUserName, value: "invalid-username" },
  { schema: schemas.atMarkUserName, value: "" },
  { schema: schemas.text, value: "" },
];

describe("SNS Schema", () => {
  describe("Valid service and ID", () => {
    for (const [name, service] of Object.entries(stories)) {
      test(name, () => {
        const result = safeParse(serviceSchema, service);
        expect(result.success).toEqual(true);
      });
    }
  });

  describe("Invalid service or ID", () => {
    for (const { schema, value } of invalidTestCases) {
      test(`Invalid value: "${value}"`, () => {
        const result = safeParse(schema, value);
        expect(result.success).toEqual(false);
      });
    }
  });
});
