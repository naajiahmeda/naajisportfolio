export interface Project {
  id: string;
  number: string;
  title: string;
  category: string;
  tagline: string;
  description: string;
  detailedDescription?: string[];
  technologies: string[];
  highlights: string[];
  githubUrl?: string;
  stats?: { label: string; value: string }[];
  accentColor?: string;
}

export interface SkillCategory {
  title: string;
  iconName: string;
  skills: string[];
  badge?: string;
}

export interface CreativeItem {
  id: string;
  title: string;
  subtitle: string;
  type: string;
  description?: string;
  aspect: string;
  featured?: boolean;
}

