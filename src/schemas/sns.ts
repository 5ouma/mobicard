import { literal, nonEmpty, object, pipe, regex, string, union } from "valibot";

/**
 * Regular expressions for IDs.
 *
 * @example
 * ```ts
 * import { regExps } from "./schemas/sns.ts";
 * const userNameRegExp = new RegExp(regExps.userName);
 * ```
 */
const regExps = {
  userName: "[\\w.-]+",
  domain: "[\\da-z]+([.-][\\da-z]+)*\\.[a-z]{2,}",
};

/**
 * Valibot schemas for IDs.
 *
 * @example
 * ```ts
 * import { parse } from "valibot";
 * import { schemas } from "./schemas/sns.ts";
 * const userName = parse(schemas.userName, "username");
 * ```
 */
export const schemas = {
  userName: pipe(
    string(),
    regex(new RegExp(`^${regExps.userName}$`, "iu"), "Invalid username format"),
    nonEmpty("Username must not be empty"),
  ),
  atMarkUserName: pipe(
    string(),
    regex(
      new RegExp(`^@${regExps.userName}$`, "iu"),
      "Invalid username format",
    ),
    nonEmpty("Username must not be empty"),
  ),
  domain: pipe(
    string(),
    regex(new RegExp(`^${regExps.domain}$`, "iu"), "Invalid domain format"),
    nonEmpty("Domain must not be empty"),
  ),
  activityPub: pipe(
    string(),
    regex(
      new RegExp(`^@${regExps.userName}@${regExps.domain}$`, "iu"),
      "Invalid ActivityPub handle format",
    ),
    nonEmpty("ActivityPub handle must not be empty"),
  ),
  text: pipe(string(), nonEmpty("Text must not be empty")),
};

/**
 * Valibot schema for SNS services.
 *
 * @example
 * ```ts
 * import { parse } from "valibot";
 * import { serviceSchema } from "./schemas/sns.ts";
 * const service = parse(serviceSchema, { service: "Bluesky", id: "example.com" });
 * ```
 */
export const serviceSchema = union([
  object({ service: literal("Bluesky"), id: schemas.domain }),
  object({ service: literal("Facebook"), id: schemas.userName }),
  object({ service: literal("GitHub"), id: schemas.userName }),
  object({ service: literal("Instagram"), id: schemas.userName }),
  object({ service: literal("Mastodon"), id: schemas.activityPub }),
  object({ service: literal("Misskey"), id: schemas.activityPub }),
  object({ service: literal("Threads"), id: schemas.atMarkUserName }),
  object({ service: literal("Twitter"), id: schemas.userName }),
  object({ service: literal("YouTube"), id: schemas.text }),
]);
