export type Language = 'es' | 'en';

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  summary: string;
  highlights: string[];
  skillsApplied: string[];
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  period: string;
  description: string;
  highlights?: string[];
}

export interface SkillItem {
  id: string;
  name: string;
  tagline: string;
  description: string;
  application: string;
}

export interface AtelierItem {
  id: string;
  title: string;
  category: 'vestidos' | 'complementos' | 'proceso';
  categoryLabel: string;
  year: string;
  image: string;
  shortDescription: string;
  fullDescription: string;
  materials: string[];
  techniques: string[];
}
