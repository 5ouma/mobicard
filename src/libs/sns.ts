import { type serviceName, services } from "../types/services";

const isFediverse = (service: serviceName): boolean => {
  return service === "Mastodon" || service === "Misskey";
};

export type sns = Readonly<{ url: string; icon: string; color: string }>;

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
