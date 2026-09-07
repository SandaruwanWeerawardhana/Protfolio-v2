import { Github, Linkedin, Mail } from 'lucide-react';
import { certifications } from './education';
import { projects } from './projects';
import { skillCategories } from './skills';
import type { NavItem, SocialLink } from '../types';

/** Resolves a file inside /public against the configured Vite base path. */
export const publicAsset = (path: string) =>
  `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`;

export const site = {
  name: 'Sandaruwan Weerawardhana',
  firstName: 'Sandaruwan',
  role: 'FullStack Developer',
  /** Rotating titles shown in the hero. */
  titles: ['Full Stack Developer', 'Software Engineer', 'Frontend Developer'],
  location: 'Sri Lanka',
  availability: 'Available for work',
  email: 'weerawardanasw@gmail.com',
  resumeUrl: publicAsset('assets/Sandaruwan_Weerawardhana_Resume.pdf'),
  githubUrl: 'https://github.com/SandaruwanWeerawardhana',
  linkedinUrl: 'https://www.linkedin.com/in/sandaruwan-linkdin/',
  reposUrl: 'https://github.com/SandaruwanWeerawardhana?tab=repositories',
  intro:
    'As A Passionate Full Stack Developer, I Specialize In Building Innovative And Scalable Web Applications Using The MERN Stack. I Enjoy Transforming Complex Problems Into Intuitive, User-Friendly Solutions.',
  introHighlight: "🚀 Let's Build something amazing!",
  availabilityNote:
    "I'm currently available for work and open to discussing new opportunities. Feel free to reach out!",
} as const;

export const navItems: NavItem[] = [
  { name: 'About', to: 'about' },
  { name: 'Skills', to: 'skills' },
  { name: 'Education', to: 'experience' },
  { name: 'Projects', to: 'projects' },
  { name: 'Contact', to: 'contact' },
];

export const socialLinks: SocialLink[] = [
  { name: 'GitHub', href: site.githubUrl, icon: Github },
  { name: 'LinkedIn', href: site.linkedinUrl, icon: Linkedin },
  { name: 'Email', href: `mailto:${site.email}`, icon: Mail },
];

const totalSkills = skillCategories.reduce((total, category) => total + category.skills.length, 0);

/** Proof points under the hero, derived from the content so they never drift. */
export const heroStats = [
  { value: `${projects.length}+`, label: 'Projects built' },
  { value: `${totalSkills}+`, label: 'Technologies' },
  { value: `${certifications.length}`, label: 'Certifications' },
];
