import { experimental_AstroContainer as AstroContainer } from "astro/container";
import { expect, test } from "vitest";

import Index from "../pages/index.astro";

test("Index", async () => {
  const container: AstroContainer = await AstroContainer.create();
  const result: string = await container.renderToString(Index);

  expect(result).toMatchSnapshot();
});
