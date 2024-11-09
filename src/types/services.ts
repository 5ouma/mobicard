export const services = {
  Bluesky: {
    url: "https://bsky.app/profile/",
    icon: "mingcute:bluesky-social-line",
    color: "#0285FF",
  },
  Facebook: {
    url: "https://www.facebook.com/",
    icon: "mingcute:facebook-line",
    color: "#0866FF",
  },
  GitHub: {
    url: "https://github.com/",
    icon: "mingcute:github-line",
    color: "#181717",
  },
  Instagram: {
    url: "https://www.instagram.com/",
    icon: "mingcute:ins-line",
    color: "#E4405F",
  },
  Mastodon: {
    url: "",
    icon: "mingcute:mastodon-line",
    color: "#6364FF",
  },
  Misskey: {
    url: "",
    icon: "simple-icons:misskey",
    color: "#A1CA03",
  },
  Posts: {
    url: "https://posts.cv/",
    icon: "simple-icons:readdotcv",
    color: "#111111",
  },
  Twitter: {
    url: "https://twitter.com/",
    icon: "mingcute:twitter-line",
    color: "#1D9BF0",
  },
  Mail: {
    url: "mailto:",
    icon: "mingcute:mail-line",
    color: "",
  },
};

export type service = keyof typeof services;
