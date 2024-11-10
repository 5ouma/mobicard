import { type serviceName, services } from "../types/services";

const isFediverse = (service: serviceName): boolean => {
  return service === "Mastodon" || service === "Misskey";
};

export type contact = Readonly<{ url: string; icon: string; color: string }>;

export const getContact = (service: serviceName, id: string): contact => {
  const specified: contact = services[service];

  if (!specified) throw new Error(`Unsupported service: ${service}`);

  if (isFediverse(service)) {
    const parts: string[] = id.split("@");
    if (parts.length !== 3 || parts[0] !== "") {
      throw new Error(`Invalid ${service} ID format`);
    }
  }

  const url: string = isFediverse(service)
    ? `https://${id.split("@")[2]}/${id}`
    : specified.url + id;
  return { url, icon: specified.icon, color: specified.color };
};
