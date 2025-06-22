import { readFile } from "node:fs/promises";

import { parse } from "valibot";

import { metaSchema } from "../schemas/meta.ts";

const file = await readFile("./meta.json", "utf-8");
const data = JSON.parse(file);

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
