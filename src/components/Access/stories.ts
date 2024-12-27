import type { Props } from "./Access.astro";

export const Default: Props = {
  homepage: new URL("https://example.com"),
  email: "email@example.com",
};

export const SubDomain: Props = {
  homepage: new URL("https://www.example.com"),
  email: "email@www.example.com",
};

export const WithoutEmail: Props = {
  homepage: new URL("https://www.example.com"),
};
