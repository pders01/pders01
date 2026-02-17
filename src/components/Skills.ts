import type { ProfileConfig, SkillItem } from "../types";

const DEVICON_BASE =
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/";

function skillIcon(skill: SkillItem): string {
  const src = skill.iconUrl ?? `${DEVICON_BASE}${skill.icon}.svg`;
  return `  <a href="${skill.url}" target="_blank" rel="noreferrer"><img src="${src}" width="36" height="36" alt="${skill.name}" /></a>`;
}

function renderCategories(skills: Record<string, SkillItem[]>): string {
  return Object.entries(skills)
    .map(([category, items]) => {
      const icons = items.map(skillIcon).join("\n");
      return `  #### ${category}\n${icons}`;
    })
    .join("\n\n");
}

export function Skills({ config }: { config: ProfileConfig }): string {
  const lines = [
    "### Skills\n",
    "",
    '<p align="left" style="display: flex; flex-wrap: wrap; gap: 10px;">',
    "",
    renderCategories(config.skills),
  ];

  if (config.learningSkills?.length) {
    const icons = config.learningSkills.map(skillIcon).join("\n");
    lines.push(
      "",
      "  #### Currently Learning",
      icons,
    );
  }

  lines.push("", "</p>");

  if (config.historicalSkills && Object.keys(config.historicalSkills).length) {
    lines.push(
      "",
      "<details>",
      "<summary>Previously worked with</summary>",
      "",
      '<p align="left" style="display: flex; flex-wrap: wrap; gap: 10px;">',
      "",
      renderCategories(config.historicalSkills),
      "",
      "</p>",
      "",
      "</details>",
    );
  }

  lines.push("");
  return lines.join("\n");
}
