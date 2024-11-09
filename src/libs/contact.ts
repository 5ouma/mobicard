import { type service, services } from "../types/services";

const isFediverse = (service: service): boolean => {
  return service === "Mastodon" || service === "Misskey";
};

type contact = { url: string; icon: string; color: string };

export const getContact = (service: service, id: string): contact => {
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
