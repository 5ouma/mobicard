import { expect, test } from "vitest";

import data from "./meta.ts";

test("meta", () => {
  expect(data).toMatchObject({
    name: expect.any(String),
    description: expect.any(String),
    icon: expect.any(URL),
    homepage: expect.any(URL),
    sns: expect.any(Array),
    card: expect.any(URL),
  });
});
