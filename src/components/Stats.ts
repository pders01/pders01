import type { ProfileConfig } from "../types";

const CARDS_BASE =
  "https://raw.githubusercontent.com/pders01/pders01/main/profile-summary-card-output";

const CARDS = [
  { file: "0-profile-details.svg", alt: "Profile Details" },
  { file: "3-stats.svg", alt: "Stats" },
  { file: "1-repos-per-language.svg", alt: "Repos Per Language" },
  { file: "2-most-commit-language.svg", alt: "Most Commit Language" },
  { file: "4-productive-time.svg", alt: "Productive Time" },
];

export function Stats({ config }: { config: ProfileConfig }): string {
  const theme = config.statsTheme ?? "transparent";
  const cards = CARDS.map(
    (c) =>
      `<img src="${CARDS_BASE}/${theme}/${c.file}" alt="${c.alt}" />`,
  ).join("\n");

  return `### Stats\n\n<p align="left">\n${cards}\n</p>`;
}
