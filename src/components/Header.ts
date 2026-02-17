import type { ProfileConfig } from "../types";

export function Header({ config }: { config: ProfileConfig }): string {
  const lines = [`# ${config.name}`, "", `**${config.title}**`];
  if (config.bio) {
    lines.push("", config.bio);
  }
  return lines.join("\n");
}
