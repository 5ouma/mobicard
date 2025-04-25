import {
  url,
  array,
  email,
  nonEmpty,
  object,
  optional,
  pipe,
  string,
} from "valibot";

import { serviceSchema } from "./sns.ts";

/**
 * Valibot schema for site metadata.
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
 * import { parse } from "valibot";
 * import { metaSchema } from "./schemas/meta.ts";
 *
 * const site = {
 *   name: "Site Name",
 *   description: "Site description",
 *   icon:"https://example.com/icon.png",
 *   homepage:"https://example.com",
 *   email: "email@example.com",
 *   sns: [
 *     { service: "Twitter", id: "twitter" },
 *     { service: "GitHub", id: "github" },
 *   ],
 *   card:"https://example.com",
 * };
 * const parsed = parse(metaSchema, site);
 * ```
 */
export const metaSchema = object({
  name: pipe(string(), nonEmpty("Name must not be empty")),
  description: pipe(string(), nonEmpty("Description must not be empty")),
  icon: pipe(
    string(),
    url("Icon must be a valid URL"),
    nonEmpty("Icon must not be empty"),
  ),
  homepage: pipe(
    string(),
    url("Homepage must be a valid URL"),
    nonEmpty("Homepage must not be empty"),
  ),
  email: optional(pipe(string(), email("Email must be a valid email address"))),
  sns: array(serviceSchema),
  card: pipe(
    string(),
    url("Card must be a valid URL"),
    nonEmpty("Card must not be empty"),
  ),
});
