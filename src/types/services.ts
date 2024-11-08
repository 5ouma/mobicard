export const services = {
  Bluesky: {
    url: "https://bsky.app/profile/",
    icon: "mingcute:bluesky-social-line",
  },
  Facebook: {
    url: "https://www.facebook.com/",
    icon: "mingcute:facebook-line",
  },
  GitHub: {
    url: "https://github.com/",
    icon: "mingcute:github-line",
  },
  Instagram: {
    url: "https://www.instagram.com/",
    icon: "mingcute:ins-line",
  },
  Mastodon: {
    icon: "mingcute:mastodon-line",
  },
  Misskey: {
    icon: "simple-icons:misskey",
  },
  Posts: {
    url: "https://posts.cv/",
    icon: "simple-icons:readdotcv",
  },
  Twitter: {
    url: "https://twitter.com/",
    icon: "mingcute:twitter-line",
  },
  Mail: {
    url: "mailto:",
    icon: "mingcute:mail-line",
  },
};

export type service = keyof typeof services;
