import { Boxes, Cloud, Database, Layers } from 'lucide-react';
import type { Certification, EducationItem } from '../types';

export const education: EducationItem[] = [
  {
    degree: 'Bachelor of Information Technology "(UG)"',
    institution: 'University of Moratuwa',
    period: '2025 - Present',
  },
  {
    degree: 'Diploma in Software Engineering',
    institution: 'Institute of Computer Engineering Technology (iCET)',
    period: '2024 - 2025',
    highlights: [
      'Object-Oriented Programming',
      'Spring Boot',
      'Angular',
      'Version Control Tool',
      'MySQL',
      'Hibernate',
    ],
  },
  {
    degree: 'GCE A/L',
    institution: 'Mihindu Central College, Agalawatta',
    period: '2021 - 2024',
  },
  {
    degree: 'GCE O/L',
    institution: 'Meril Kariyawasam Central College, Meegahathanna',
    period: '2015 - 2020',
  },
];

export const certifications: Certification[] = [
  {
    title: 'Micro Front-End Architecture with React',
    issuer: 'LinkedIn Learning',
    href: 'https://www.linkedin.com/learning/certificates/a3dabe725483f9acdd3739b87b7e7264152284cdab15d2819886b6d441a0a03a?trk=share_certificate',
    icon: Layers,
  },
  {
    title: 'Introduction to Containerization',
    issuer: 'CoDeKu DevOps Academy',
    href: 'https://1drv.ms/b/c/7096e17f88b7be67/EVzBs3pDmvVKrpxusRkrV_MBIhuHNxSDhXCfOYxnSFqcAA?e=Hl2Mre',
    icon: Boxes,
  },
  {
    title: 'Cloud Computing for Beginners',
    issuer: 'CoDeKu DevOps Academy',
    href: 'https://1drv.ms/b/c/7096e17f88b7be67/EYnPRJ61OZVPt3rt95WXgmkBoy5scXFBrnpb1yk7V1VaWg?e=jDskgt',
    icon: Cloud,
  },
  {
    title: 'SQL Basic',
    issuer: 'HackerRank',
    href: 'https://www.hackerrank.com/certificates/iframe/f96297e0c07e',
    icon: Database,
  },
];
