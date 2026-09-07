import { motion } from 'framer-motion';
import SpotlightCard from './SpotlightCard';

const skillCategories = [
  {
    title: 'Frontend Development',
    skills: [
      { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
      { name: 'TypeScript', icon: 'https://skillicons.dev/icons?i=ts' },
      { name: 'Angular', icon: 'https://skillicons.dev/icons?i=angular' },
      { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
      { name: 'TailwindCSS', icon: 'https://skillicons.dev/icons?i=tailwind' },
      { name: 'Bootstrap', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg' },
      { name: 'HTML', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
      { name: 'CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
      { name: 'Vue.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg' },
    ],
  },
  {
    title: 'Backend Development',
    skills: [
      { name: 'Spring Boot', icon: 'https://skillicons.dev/icons?i=spring' },
      { name: 'Hibernate', icon: 'https://skillicons.dev/icons?i=hibernate' },
      { name: 'PHP', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg' },
      { name: 'Laravel', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg' },
      { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg' },
      { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg' },
      { name: 'Nest.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nestjs/nestjs-original.svg' },
      { name: 'Express.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg' },

    ],
  },
  {
    title: 'Database',
    skills: [
      { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
      { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
    ],
  },
  {
    title: 'Other',
    skills: [
      { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
      { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
      { name: 'VS Code', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' },
      { name: 'Postman', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg' },
      { name: 'IntelliJ', icon: 'https://skillicons.dev/icons?i=idea' },
      { name: 'Docker', icon: 'https://skillicons.dev/icons?i=docker' },
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center mb-4">
            <h2 className="section-title">Skills & Expertise</h2>
          </div>
          <p className="section-subtitle">A comprehensive overview of my technical capabilities</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <SpotlightCard
                className="glass-card h-full"
                spotlightColor={index % 2 === 0 ? "rgba(14, 165, 233, 0.15)" : "rgba(139, 92, 246, 0.15)"}
              >
                <h3 className="text-2xl font-semibold text-white mb-8 border-b border-white/10 pb-4">{category.title}</h3>
                <ul className="grid grid-cols-3 sm:grid-cols-4 gap-x-6 gap-y-10">
                  {category.skills.map((skill) => (
                    <li key={skill.name}>
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        className="flex flex-col items-center group"
                      >
                        <div className="w-14 h-14 mb-4 flex items-center justify-center bg-white/5 rounded-2xl p-3 border border-white/5 group-hover:border-primary-500/30 group-hover:bg-white/10 transition-all duration-300 shadow-lg group-hover:shadow-glow/20">
                          <img
                            src={skill.icon}
                            alt={`${skill.name} icon`}
                            className="w-full h-full object-contain filter drop-shadow-lg"
                            loading="lazy"
                            onError={(e) => {
                              e.currentTarget.src = "https://via.placeholder.com/40?text=Icon";
                            }}
                          />
                        </div>
                        <span className="text-sm text-center font-medium text-gray-400 group-hover:text-white transition-colors">
                          {skill.name}
                        </span>
                      </motion.div>
                    </li>
                  ))}
                </ul>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;