export interface AboutItem {
  emoji: string;
  text: string;
}

export interface SkillItem {
  name: string;
  icon: string;
  url: string;
  iconUrl?: string;
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
