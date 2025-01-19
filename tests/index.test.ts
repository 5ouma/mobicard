import { experimental_AstroContainer as AstroContainer } from "astro/container";
import { expect, test } from "vitest";

import Index from "../src/pages/index.astro";

test("Index", async () => {
  const container: AstroContainer = await AstroContainer.create();
  const result: string = await container.renderToString(Index);

  const regex =
    /<script type="module" src=".+\.astro\?astro&type=script&index=0&lang\.ts"><\/script>/;
  expect(result.replace(regex, "")).toMatchSnapshot();
});
