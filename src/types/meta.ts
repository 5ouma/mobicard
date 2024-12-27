import type { serviceName } from "./services.ts";

/**
 * Meta data of the site.
 *
 * @property name Site name
 * @property description Site description
 * @property icon Site icon URL
 * @property homepage Homepage URL
 * @property email Email address
 * @property sns SNS information
 * @property card Site URL
 *
 * @example
 * ```ts
 * import { meta } from "./types/meta.ts";
 * const site: meta = {
 *   name: "Site Name",
 *   description: "Site description",
 *   icon: "https://example.com/icon.png",
 *   homepage: "https://example.com",
 *   email: "email@example.com",
 *   sns: [
 *     { service: "Twitter", id: "twitter" },
 *     { service: "GitHub", id: "github" },
 *   ],
 *   card: "https://example.com",
 * };
 * ```
 */
export type meta = Readonly<{
  name: string;
  description: string;
  icon: string;
  homepage: string;
  email?: string;
  sns: Readonly<{ service: serviceName; id: string }>[];
  card: string;
}>;
