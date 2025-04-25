import { parse } from "valibot";

import data from "../../meta.json";
import { metaSchema } from "../schemas/meta.ts";

/**
 * Meta data from meta.json.
 *
 * @example
 * ```ts
 * import meta from "./libs/meta.ts";
 * console.log(meta);
 * ```
 */
export default parse(metaSchema, data);
