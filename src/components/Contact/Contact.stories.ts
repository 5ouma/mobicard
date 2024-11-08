import Contact from "./Contact.astro";
import * as stories from "./story.ts";

export default {
  title: "Contact Links",
  component: Contact,
};

export const Bluesky = { args: stories.Bluesky };
export const Facebook = { args: stories.Facebook };
export const GitHub = { args: stories.GitHub };
export const Instagram = { args: stories.Instagram };
export const Mastodon = { args: stories.Mastodon };
export const Misskey = { args: stories.Misskey };
export const Posts = { args: stories.Posts };
export const Twitter = { args: stories.Twitter };
export const Mail = { args: stories.Mail };
