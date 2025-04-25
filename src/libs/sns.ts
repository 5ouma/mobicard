import { type service, type serviceName, services } from "../constants/sns.ts";

/**
 * Get SNS information.
 *
 * @param service Service name
 * @param id User ID
 * @returns SNS information
 *
 * @example
 * ```ts
 * import { getSNS } from "./libs/sns.ts";
 * console.log(getSNS("Twitter", "twitter"));
 * ```
 */
export const getSNS = (serviceName: serviceName, id: string): service => {
  const specified = services[serviceName];
  return {
    ...specified,
    url: specified.url
      ? `${specified.url}/${id}`
      : `https://${id.split("@")[2]}/@${id.split("@")[1]}`,
  };
};
