type info = {
  url: string;
  icon: string;
  color: string;
};

export const services = {
  Bluesky: {
    url: "bsky.app/profile",
    icon: "mingcute:bluesky-social-line",
    color: "#0285FF",
  },
  Facebook: {
    url: "www.facebook.com",
    icon: "mingcute:facebook-line",
    color: "#0866FF",
  },
  GitHub: {
    url: "github.com",
    icon: "mingcute:github-line",
    color: "#181717",
  },
  Instagram: {
    url: "www.instagram.com",
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
    url: "posts.cv",
    icon: "simple-icons:readdotcv",
    color: "#111111",
  },
  Threads: {
    url: "threads.net",
    icon: "mingcute:threads-line",
    color: "#000000",
  },
  Twitter: {
    url: "twitter.com",
    icon: "mingcute:twitter-line",
    color: "#1D9BF0",
  },
  YouTube: {
    url: "youtube.com",
    icon: "mingcute:youtube-line",
    color: "#FF0000",
  },
} as const satisfies Record<string, info>;

export type serviceName = keyof typeof services;
