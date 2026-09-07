import { spotlight } from '../lib/spotlight';
import type { Project } from '../types';

export const projects: Project[] = [
  {
    title: 'Car Rent System',
    description: 'A Car Rental Management System designed for rental operations',
    image: 'https://www.fleetroot.com/wp-content/uploads/2020/08/20-features-in-car-rental-software-in-2020-1.jpg',
    techStack: ['Spring Boot', 'React', 'Hibernate', 'Mysql', 'JWT', 'Docker', 'AWS(S3)'],
    achievements: [
      'Browse available cars for rent',
      'Book and manage car rentals',
      'Customer registration and authentication',
      'Admin panel for managing cars, rentals, and users',
    ],
    links: {
      github: 'https://github.com/SandaruwanWeerawardhana/SoloRent-Frontend.git',
    },
    featured: true,
    spotlightColor: spotlight.sky,
  },
  {
    title: 'Whatsapp Chat Bot',
    description: 'A chat bot app built this project was an incredible learning experience.',
    image: 'https://images.unsplash.com/photo-1605379399642-870262d3d051?auto=format&fit=crop&q=80&w=800',
    techStack: ['React', 'Node.js', 'Nest js', 'Ngrok', 'Webhook'],
    achievements: [
      'WhatsApp Webhook Integration',
      'OpenAI GPT models to generate context-aware and intelligent replies to user messages',
      'Built with NestJS, ensuring a clean, maintainable, and scalable codebase',
      'Includes comprehensive tests to validate functionality and ensure reliability',
    ],
    links: {
      github: 'https://github.com/SandaruwanWeerawardhana/Whatapp-bot.git',
    },
    spotlightColor: spotlight.violet,
  },
  {
    title: 'Feedback Management System',
    description: 'This feedback management system use manage and process user feedback.',
    image: 'https://www.shutterstock.com/image-photo/manager-collects-information-customer-satisfaction-600nw-2523580339.jpg',
    techStack: ['Node.js', 'React', 'TypeScript', 'Mysql', 'Express', 'Tailwind CSS'],
    achievements: [
      'Feedback form and submission',
      'Admin dashboard for managing feedback',
      'Responsive, modern UI with Tailwind CSS',
      'Form validation and user feedback',
    ],
    links: {
      github: 'https://github.com/SandaruwanWeerawardhana/Feedback-Management-System-frontend.git',
    },
    spotlightColor: spotlight.sky,
  },
  {
    title: 'Hospital Management POS System',
    description: 'This has been a great learning experience as I continue refining my skills in Java Fx',
    image: 'https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg?auto=compress&cs=tinysrgb&w=600',
    techStack: ['Core Java', 'Java FX', 'Hibernate', 'Mysql'],
    achievements: [
      'Built using Java Fx for the GUI, providing a Desktop interface.',
      'Database integration with Hibernate ORM',
      'Role-based access control',
      'Uses MySQL for database management',
    ],
    links: {
      github: 'https://github.com/SandaruwanWeerawardhana/Hospital-Management-System.git',
    },
    spotlightColor: spotlight.violet,
  },
  {
    title: 'MOS Burgers Web POS System',
    description:
      'A web-based system allows cashiers to place customer orders, while admins can manage products and customer information',
    image: 'https://images.pexels.com/photos/31650325/pexels-photo-31650325/free-photo-of-modern-burger-restaurant-interior-in-mexico.jpeg?auto=compress&cs=tinysrgb&w=600',
    techStack: ['HTML', 'Tailwing CSS', 'Spring Boot', 'modern CSS'],
    achievements: [
      'Custom design tailored to the Food industry.',
      'Fully responsive for smooth browsing on any device.',
      'Manage Customers, Items, and Orders',
    ],
    links: {
      github: 'https://github.com/SandaruwanWeerawardhana/mos-frontend.git',
    },
    spotlightColor: spotlight.sky,
  },
];
