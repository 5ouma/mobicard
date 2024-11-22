import Access from "./Access.astro";
import * as stories from "./stories.ts";

export default {
  title: "Homepage and Email",
  component: Access,
};

export const Default = { args: stories.Default };
export const SubDomain = { args: stories.SubDomain };
export const WithoutEmail = { args: stories.WithoutEmail };
