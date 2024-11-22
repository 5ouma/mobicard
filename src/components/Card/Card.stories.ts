import Card from "./Card.astro";
import * as stories from "./stories.ts";

export default {
  title: "Card",
  component: Card,
};

export const Default = { args: stories.Default };
export const SubDomain = { args: stories.SubDomain };
