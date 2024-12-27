import data from "../../meta.json";
import type { meta } from "../types/meta.ts";

/**
 * Meta data from meta.json.
 *
 * @example
 * ```ts
 * import meta from "./libs/meta.ts";
 * console.log(meta);
 * ```
 */
export default {
  ...data,
  icon: new URL(data.icon),
  homepage: new URL(data.homepage),
  card: new URL(data.card),
} as meta;
