import type { ProfileConfig } from "../types";

export function Stats({ config }: { config: ProfileConfig }): string {
  const { username, theme = "transparent" } = config.stats;

  const statsCard = `https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&theme=${theme}&hide_border=true`;
  const langsCard = `https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&layout=compact&theme=${theme}&hide_border=true`;
  const streakCard = `https://github-readme-streak-stats.herokuapp.com/?user=${username}&theme=${theme}&hide_border=true`;

  return [
    "### Stats\n",
    `<p align="left">`,
    `<img src="${statsCard}" alt="GitHub Stats" />`,
    `</p>`,
    "",
    `<p align="left">`,
    `<img src="${langsCard}" alt="Top Languages" />`,
    `</p>`,
    "",
    `<p align="left">`,
    `<img src="${streakCard}" alt="GitHub Streak" />`,
    `</p>`,
  ].join("\n");
}
