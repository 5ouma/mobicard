import Bio from "./Bio.astro";
import * as stories from "./story.ts";

export default {
  title: "Bio",
  component: Bio,
};

export const Default = { args: stories.Default };
export const Japanese = { args: stories.Japanese };
export const Long = { args: stories.Long };
