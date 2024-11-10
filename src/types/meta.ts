import type { serviceName } from "./services.ts";

export type meta = Readonly<{
  name: string;
  description: string;
  icon: string;
  contacts: Readonly<{ service: serviceName; id: string }>[];
  homepage: string;
}>;
