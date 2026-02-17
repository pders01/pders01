import type { ProfileConfig } from "../types";

export function About({ config }: { config: ProfileConfig }): string {
  const items = config.about
    .map((item) => `* ${item.emoji}  ${item.text}`)
    .join("\n");
  return `\n${items}\n`;
}
