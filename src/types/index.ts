import type { ComponentType, SVGProps } from 'react';

export type IconComponent = ComponentType<SVGProps<SVGSVGElement> & { size?: number | string }>;

export interface NavItem {
  /** Label rendered in the navigation. */
  name: string;
  /** Id of the section this item scrolls to. */
  to: string;
}

export interface SocialLink {
  name: string;
  href: string;
  icon: IconComponent;
}

export interface Skill {
  name: string;
  /** Remote icon URL (devicon / skillicons). */
  icon: string;
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: Skill[];
}

export interface ProjectLinks {
  github?: string;
  live?: string;
}

export interface Project {
  title: string;
  description: string;
  image: string;
  techStack: string[];
  achievements: string[];
  links: ProjectLinks;
  /** Featured projects get a wider card on large screens. */
  featured?: boolean;
  spotlightColor?: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  highlights?: string[];
}

export interface Certification {
  title: string;
  issuer: string;
  href: string;
  icon: IconComponent;
}

export interface Service {
  title: string;
  description: string;
  icon: IconComponent;
}
