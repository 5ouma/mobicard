import type { Props } from "./Access.astro";

export const Default: Props = {
  homepage: "https://example.com",
  email: "email@example.com",
};

export const SubDomain: Props = {
  homepage: "https://www.example.com",
  email: "email@www.example.com",
};

export const WithoutEmail: Props = {
  homepage: "https://www.example.com",
};
