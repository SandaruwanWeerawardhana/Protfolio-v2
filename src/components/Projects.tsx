import { motion } from 'framer-motion';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import SpotlightCard from './SpotlightCard';

const projects = [
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
      // live: '',
    },

    spotlightColor: 'rgba(248, 248, 248, 0.2)',
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
      live: '',
    },
    spotlightColor: 'rgba(100, 121, 167, 0.2)',
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
      // live: '',
    },
    spotlightColor: 'rgba(248, 248, 248, 0.2)',
  },
  {
    title: 'Hospital Management POS System',
    description: 'This has been a great learning experience as I continue refining my skills in Java Fx',
    image: 'https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg?auto=compress&cs=tinysrgb&w=600',
    techStack: ['Core Java ', 'Java FX', 'Hibernate', 'Mysql'],
    achievements: [
      'Built using Java Fx for the GUI, providing a Desktop interface.',
      'Database integration with Hibernate ORM',
      'Role-based access control',
      'Uses MySQL for database management',
    ],
    links: {
      github: 'https://github.com/SandaruwanWeerawardhana/Hospital-Management-System.git',
      // live: '',
    },
    spotlightColor: 'rgba(248, 248, 248, 0.2)',
  },
  {
    title: 'MOS Burgers Web POS System ',
    description: 'A web-based system allows cashiers to place customer orders, while admins can manage products and customer information',
    image: 'https://images.pexels.com/photos/31650325/pexels-photo-31650325/free-photo-of-modern-burger-restaurant-interior-in-mexico.jpeg?auto=compress&cs=tinysrgb&w=600',
    techStack: ['HTML', 'Tailwing CSS', 'Spring Boot', 'modern CSS'],
    achievements: [
      'Custom design tailored to the Food industry.',
      'Fully responsive for smooth browsing on any device.',
      'Manage Customers, Items, and Orders ',
    ],
    links: {

      github: 'https://github.com/SandaruwanWeerawardhana/mos-frontend.git',
      // live: '',
    },
    spotlightColor: 'rgba(70, 199, 255, 0.2)',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary-900/10 rounded-full mix-blend-screen filter blur-3xl opacity-20 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Projects</h2>
          <p className="section-subtitle">Showcasing my best work and technical experience</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex"
            >
              <SpotlightCard
                className="h-full w-full glass-card flex flex-col hover:shadow-glow/20 transition-all duration-300"
                spotlightColor={project.spotlightColor}
              >
                <div className="relative aspect-video overflow-hidden rounded-lg mb-4 border border-white/5">
                  <img
                    src={project.image}
                    alt={`${project.title} screenshot`}
                    className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-700 ease-in-out"
                    loading={index === 0 ? "eager" : "lazy"}
                    onError={(e) => {
                      e.currentTarget.src = "https://via.placeholder.com/16x9?text=Project+Image";
                    }}
                  />
                  <div className="absolute inset-0 bg-black/60 hover:bg-black/40 transition-colors duration-300 flex items-center justify-center opacity-0 hover:opacity-100 backdrop-blur-sm">
                    <a
                      href={project.links.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white/10 border border-white/20 p-3 rounded-full transform scale-75 hover:scale-100 transition-all duration-200 hover:bg-primary-600 hover:border-primary-500"
                      aria-label={`View ${project.title} demo`}
                    >
                      <ExternalLink className="w-6 h-6 text-white" />
                    </a>
                  </div>
                </div>
                <div className="flex-1 flex flex-col p-2">
                  <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-gray-400 mb-4 line-clamp-3 text-sm leading-relaxed">{project.description}</p>

                  <div className="mb-4">
                    <h4 className="text-xs font-semibold text-primary-400 mb-2 uppercase tracking-wider">Tech Stack:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 bg-white/5 border border-white/10 text-gray-300 rounded-full text-xs hover:bg-white/10 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-xs font-semibold text-primary-400 mb-2 uppercase tracking-wider">Key Achievements:</h4>
                    <ul className="space-y-2">
                      {project.achievements.map((achievement) => (
                        <li key={achievement} className="flex items-start text-xs text-gray-400">
                          <span className="w-1.5 h-1.5 mt-1 mr-2 bg-primary-500 rounded-full flex-shrink-0"></span>
                          <span className="line-clamp-2">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex space-x-6 mt-auto pt-4 border-t border-white/5">
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-400 hover:text-white text-sm transition-colors duration-200 group"
                    >
                      <Github className="w-4 h-4 mr-2 group-hover:text-primary-400 transition-colors" />
                      <span>Code</span>
                    </a>
                    {project.links.live && (
                      <a
                        href={project.links.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-gray-400 hover:text-white text-sm transition-colors duration-200 group"
                      >
                        <ExternalLink className="w-4 h-4 mr-2 group-hover:text-primary-400 transition-colors" />
                        <span>Live Demo</span>
                      </a>
                    )}
                  </div>

                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>

        {/* View more projects button */}
        <div className="mt-16 text-center">
          <motion.a
            href="https://github.com/SandaruwanWeerawardhana?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline inline-flex items-center hover:bg-white/5 border-primary-500/30 text-primary-400 hover:text-primary-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View All Projects
            <ArrowRight className="ml-2 w-4 h-4" />
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default Projects;