import type { ProfileConfig, SkillItem } from "../types";

const SKILLICONS_BASE = "https://skillicons.dev/icons?i=";

function iconStrip(category: string, items: SkillItem[]): string | null {
  const ids = items
    .map((s) => s.skilliconsId)
    .filter((id): id is string => Boolean(id));
  if (!ids.length) return null;
  const url = `${SKILLICONS_BASE}${ids.join(",")}`;
  return `<p align="left"><img src="${url}" alt="${category}" /></p>`;
}

function linkLine(items: SkillItem[]): string {
  return items.map((s) => `[${s.name}](${s.url})`).join(" · ");
}

function renderCategory(category: string, items: SkillItem[]): string {
  const blocks = [`#### ${category}`, ""];
  const strip = iconStrip(category, items);
  if (strip) blocks.push(strip, "");
  blocks.push(linkLine(items));
  return blocks.join("\n");
}

function renderCategories(skills: Record<string, SkillItem[]>): string {
  return Object.entries(skills)
    .map(([category, items]) => renderCategory(category, items))
    .join("\n\n");
}

export function Skills({ config }: { config: ProfileConfig }): string {
  const lines = ["### Skills", "", renderCategories(config.skills)];

  if (config.learningSkills?.length) {
    lines.push("", renderCategory("Currently Learning", config.learningSkills));
  }

  if (config.historicalSkills && Object.keys(config.historicalSkills).length) {
    lines.push(
      "",
      "<details>",
      "<summary>Previously worked with</summary>",
      "",
      renderCategories(config.historicalSkills),
      "",
      "</details>",
    );
  }

  lines.push("");
  return lines.join("\n");
}
