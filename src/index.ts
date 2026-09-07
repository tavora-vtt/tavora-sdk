export const SDK_VERSION = "0.0.0";

export const ENGINE_API_VERSION = 1;

export type PackageType = "system" | "module" | "theme" | "language" | "content";

export type Capability =
  | `documents:read:${string}`
  | `documents:write:${string}`
  | "chat:post"
  | "dice:roll"
  | "scene:control"
  | "storage:own"
  | "ui:sheets"
  | "ui:panels"
  | "ui:iframe"
  | "server:hooks"
  | `net:fetch:${string}`;

export interface PackageManifest {
  id: string;
  type: PackageType;
  version: string;
  title: Record<string, string>;
  engine: { min: string; max?: string };
  sdk: string;
  capabilities: Capability[];
}
