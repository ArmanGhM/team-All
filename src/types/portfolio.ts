export type LanguageCode = 'en' | 'fa';

export interface LocalizedString {
  en: string;
  fa: string;
}

export interface ExperienceItem {
  id: string;
  role: LocalizedString;
  company: LocalizedString;
  period: LocalizedString;
  summary: LocalizedString;
}

export interface EducationItem {
  id: string;
  degree: LocalizedString;
  institution: LocalizedString;
  year: string;
}

export interface MemberGradient {
  from: string;
  to: string;
  css: string;
  softGlow: string;
}

export interface TeamMember {
  slug: string;
  name: LocalizedString;
  role: LocalizedString;
  location: LocalizedString;
  avatar: string;
  gradient: MemberGradient;
  bio: LocalizedString;
  email: string;
  github: string;
  linkedin: string;
  yearsExperience: number;
  skills: string[];
  experience: ExperienceItem[];
  education: EducationItem[];
}

export interface Project {
  id: string;
  title: LocalizedString;
  subtitle: LocalizedString;
  summary: LocalizedString;
  problem: LocalizedString;
  solution: LocalizedString;
  coverImage: string;
  year: string;
  client: LocalizedString;
  tools: string[];
  tags: string[];
  creatorSlugs: string[];
  liveUrl: string;
  githubUrl: string;
  featured: boolean;
}

export interface BlogPost {
  slug: string;
  title: LocalizedString;
  excerpt: LocalizedString;
  content: LocalizedString;
  coverImage: string;
  authorSlug: string;
  publishedAt: string;
  readTimeMinutes: number;
  tags: string[];
}

export type ThemeId =
  | 'cyberpunk-neon'
  | 'aurora-borealis'
  | 'sunset-vibe'
  | 'minimal-frost'
  | 'royal-gold';

export type ThemePolarity = 'dark' | 'light';

export interface ThemePalette {
  bgPrimary: string;
  bgSecondary: string;
  bgGradient: string;
  blobOne: string;
  blobTwo: string;
  cardBg: string;
  headerBg: string;
  textPrimary: string;
  textSecondary: string;
  accent: string;
  accentForeground: string;
  accentGradient: string;
  border: string;
}

export interface ThemeDefinition {
  id: ThemeId;
  name: LocalizedString;
  defaultPolarity: ThemePolarity;
  dark: ThemePalette;
  light: ThemePalette;
}
