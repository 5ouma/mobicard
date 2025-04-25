/**
 * SNS information of the user.
 *
 * @property url URL of the user
 * @property icon Icon of the service
 * @property color Color of the service
 *
 * @example
 * ```ts
 * import { sns } from "./constants/sns.ts";
 * const service: sns = {
 *   url: "https://twitter.com",
 *   icon: "mingcute:twitter-line",
 *   color: "#1D9BF0",
 * };
 */
export type service = Readonly<{
  url: string | null;
  icon: `mingcute:${string}` | `simple-icons:${string}`;
  color: `#${string}`;
}>;

/**
 * SNS services.
 *
 * @property Bluesky Bluesky
 * @property Facebook Facebook
 * @property GitHub GitHub
 * @property Instagram Instagram
 * @property Mastodon Mastodon
 * @property Misskey Misskey
 * @property Threads Threads
 * @property Twitter Twitter
 * @property YouTube YouTube
 *
 * @example
 * ```ts
 * import { services } from "./constants/sns.ts";
 * console.log(services);
 * ```
 */
export const services = {
  Bluesky: {
    url: "https://bsky.app/profile",
    icon: "mingcute:bluesky-social-line",
    color: "#0285FF",
  },
  Facebook: {
    url: "https://www.facebook.com",
    icon: "mingcute:facebook-line",
    color: "#0866FF",
  },
  GitHub: {
    url: "https://github.com",
    icon: "mingcute:github-line",
    color: "#181717",
  },
  Instagram: {
    url: "https://www.instagram.com",
    icon: "mingcute:ins-line",
    color: "#E4405F",
  },
  Mastodon: {
    url: null,
    icon: "mingcute:mastodon-line",
    color: "#6364FF",
  },
  Misskey: {
    url: null,
    icon: "simple-icons:misskey",
    color: "#A1CA03",
  },
  Threads: {
    url: "https://threads.net",
    icon: "mingcute:threads-line",
    color: "#000000",
  },
  Twitter: {
    url: "https://twitter.com",
    icon: "mingcute:twitter-line",
    color: "#1D9BF0",
  },
  YouTube: {
    url: "https://youtube.com",
    icon: "mingcute:youtube-line",
    color: "#FF0000",
  },
} as const satisfies Record<string, service>;

/**
 * SNS service names.
 *
 * @example
 * ```ts
 * import { serviceName } from "./types/services.ts";
 * const service: serviceName = "Bluesky";
 * ```
 */
export type serviceName = keyof typeof services;
