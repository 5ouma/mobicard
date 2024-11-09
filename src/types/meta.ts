import type { service } from "./services.ts";

export type meta = {
  name: string;
  description: string;
  icon: string;
  contacts: { service: service; id: string }[];
  homepage: string;
};
