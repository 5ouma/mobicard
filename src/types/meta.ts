import type { serviceName } from "./services.ts";

export type meta = Readonly<{
  name: string;
  description: string;
  icon: string;
  homepage: string;
  email?: string;
  sns: Readonly<{ service: serviceName; id: string }>[];
  card: string;
}>;
