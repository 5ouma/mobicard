import SNS from "./SNS.astro";
import * as stories from "./stories.ts";

export default {
  title: "SNS Links",
  component: SNS,
};

export const Bluesky = { args: stories.Bluesky };
export const Facebook = { args: stories.Facebook };
export const GitHub = { args: stories.GitHub };
export const Instagram = { args: stories.Instagram };
export const Mastodon = { args: stories.Mastodon };
export const Misskey = { args: stories.Misskey };
export const Posts = { args: stories.Posts };
export const Threads = { args: stories.Threads };
export const Twitter = { args: stories.Twitter };
