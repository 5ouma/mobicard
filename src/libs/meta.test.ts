import { expect, test } from "vitest";

import data from "./meta.ts";

test("meta", () => {
  expect(data).toMatchObject({
    name: expect.any(String),
    description: expect.any(String),
    icon: expect.any(String),
    contacts: expect.any(Array),
    homepage: expect.any(String),
  });
});
