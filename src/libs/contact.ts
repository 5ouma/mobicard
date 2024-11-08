import { type service, services } from "../types/services";

type contact = { url: string; icon: string };

export const getContact = (service: service, id: string): contact => {
  const url: string =
    service === "Mastodon" || service === "Misskey"
      ? `https://${id.split("@")[2]}/${id}`
      : services[service].url + id;
  return { url, icon: services[service].icon };
};
