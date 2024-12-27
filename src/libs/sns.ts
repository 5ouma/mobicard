import { type serviceName, services, type sns } from "../types/services.ts";

/**
 * Check if the service is a Fediverse service.
 *
 * @param service
 * @returns `true` if the service is a Fediverse service
 *
 * @example
 * ```ts
 * import { isFediverse } from "./libs/sns.ts";
 * const service = "Mastodon";
 * console.log(isFediverse(service)); // true
 * ```
 */
const isFediverse = (service: serviceName): boolean => {
  return service === "Mastodon" || service === "Misskey";
};

/**
 * Get SNS information.
 *
 * @param service Service name
 * @param id User ID
 * @returns SNS information
 * @throws If the service is not supported
 * @throws If the ID format is invalid
 *
 * @example
 * ```ts
 * import { getSNS } from "./libs/sns.ts";
 * console.log(getSNS("Twitter", "twitter"));
 * ```
 */
export const getSNS = (service: serviceName, id: string): sns => {
  const specified: sns = services[service];

  if (!specified) throw new Error(`Unsupported service: ${service}`);

  if (isFediverse(service)) {
    const parts: string[] = id.split("@");
    if (parts.length !== 3 || parts[0] !== "") {
      throw new Error(`Invalid ${service} ID format`);
    }
  }

  const url: string = `https://${
    isFediverse(service) ? id.split("@")[2] : specified.url
  }/${isFediverse(service) ? `@${id.split("@")[1]}` : id}`;

  return { url, icon: specified.icon, color: specified.color };
};
