export interface AboutItem {
  emoji: string;
  text: string;
}

export interface SkillItem {
  name: string;
  url: string;
  // Identifier for skillicons.dev (e.g. "go", "ts", "py").
  // Omit when the tech isn't available there — it will still appear in the
  // text link line under the icon strip.
  skilliconsId?: string;
}

export interface ProfileConfig {
  name: string;
  title: string;
  bio?: string;
  about: AboutItem[];
  skills: Record<string, SkillItem[]>;
  learningSkills?: SkillItem[];
  historicalSkills?: Record<string, SkillItem[]>;
  statsTheme?: string;
}
