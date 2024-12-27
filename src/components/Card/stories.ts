import type { Props } from "./Card.astro";

export const Default: Props = { url: new URL("https://example.com") };
export const SubDomain: Props = { url: new URL("https://www.example.com") };
