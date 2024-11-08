import Homepage from "./Homepage.astro";
import * as stories from "./story.ts";

export default {
  title: "Homepage",
  component: Homepage,
};

export const Domain = { args: stories.Domain };
export const Path = { args: stories.Path };
export const Japanese = { args: stories.Japanese };
