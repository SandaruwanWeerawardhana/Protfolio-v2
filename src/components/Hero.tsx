import { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, FileText, ChevronDown, Briefcase } from 'lucide-react';
import { Link } from 'react-scroll';
import DecryptedText from './DecryptedText';
import { useAnalytics } from '../hooks/useAnalytics';
import dp from '../../public/assets/dp.png';

const Hero = () => {
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [key, setKey] = useState(0);
  const { trackInteraction } = useAnalytics();

  const titles = [
    'Full Stack Developer',
    'Software Engineer',
    // 'MERN Stack Developer',
    'Frontend Developer',
  ];

  const trackHeroLoaded = useCallback(() => {
    trackInteraction('hero_section_visible', 'view');
  }, [trackInteraction]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitleIndex((prevIndex) => (prevIndex + 1) % titles.length);
      setKey(prev => prev + 1);
    }, 2000);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          trackHeroLoaded();
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    const heroSection = document.getElementById('about');
    if (heroSection) {
      observer.observe(heroSection);
    }

    return () => {
      clearInterval(interval);
      observer.disconnect();
    };
  }, [titles.length, trackHeroLoaded]);

  // Track resume download
  const handleResumeClick = () => {
    trackInteraction('resume_download', 'click');
  };

  // Track hire me button click  
  const handleHireMeClick = () => {
    trackInteraction('hire_me_button', 'click');
  };

  return (
    <section id="about" className="min-h-screen flex flex-col justify-center relative pt-20 overflow-hidden">
      {/* Animated background shapes */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-primary-600/20 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-blob" />
        <div className="absolute top-[20%] left-[-10%] w-[400px] h-[400px] bg-secondary-600/20 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-blob animation-delay-2000" />
        <div className="absolute bottom-[-10%] right-[20%] w-[600px] h-[600px] bg-primary-800/20 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-blob animation-delay-4000" />
      </div>

      <div className="container mx-auto px-6 py-12 md:py-24 z-10">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Content column */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="lg:w-1/2 text-center lg:text-left"
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <motion.span
                  className="inline-block px-4 py-2 mb-6 text-sm font-medium text-primary-300 bg-white/5 border border-white/10 rounded-full backdrop-blur-sm"
                  whileHover={{ scale: 1.05 }}
                >
                  Welcome to my portfolio
                </motion.span>
              </motion.div>

              <motion.h1
                className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-400">Sandaruwan</span>
              </motion.h1>

              <div className="text-xl md:text-3xl font-bold mb-8 text-secondary-300 h-[60px] md:h-[72px] flex items-center justify-center lg:justify-start">
                <span className="mr-3 text-gray-400">I'm a </span>
                <DecryptedText
                  key={key}
                  text={titles[currentTitleIndex]}
                  speed={25}
                  sequential={true}
                  animateOn="view"
                  maxIterations={15}
                  className="text-primary-400"
                  encryptedClassName="text-primary-600/50"
                  revealDirection="center"
                  parentClassName="transition-all duration-300 ease-in-out"
                />
              </div>

              <motion.p
                className="text-lg text-gray-300 mb-10 leading-relaxed max-w-lg mx-auto lg:mx-0 font-light"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                As A Passionate Full Stack Developer, I Specialize In Building Innovative And Scalable Web Applications Using The MERN Stack. I Enjoy Transforming Complex Problems Into Intuitive, User-Friendly Solutions. <br /><span className="block mt-4 text-white font-medium">🚀 Let's Build something amazing!</span>
              </motion.p>

              {/* Call-to-action buttons with tracking */}
              <motion.div
                className="flex flex-wrap justify-center lg:justify-start gap-4 mb-12"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
                  <motion.a
                    href="public/assets/Sandaruwan_Weerawardhana_Resume.pdf"
                    target="_blank"
                    download
                    onClick={handleResumeClick}
                    className="btn-primary flex items-center justify-center"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FileText className="w-5 h-5 mr-2" />
                    <span>View Resume</span>
                  </motion.a>

                  <Link
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={-80}
                    duration={800}
                    className="w-full sm:w-auto"
                    onClick={handleHireMeClick}
                  >
                    <motion.button
                      className="btn-outline w-full flex items-center justify-center bg-white/5 hover:bg-white/10"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Briefcase className="w-5 h-5 mr-2" />
                      <span>Hire Me</span>
                    </motion.button>
                  </Link>
                </div>
              </motion.div>

              {/* Social links */}
              <motion.div
                className="flex justify-center lg:justify-start space-x-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
              >
                <motion.a
                  href="https://github.com/SandaruwanWeerawardhana"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-primary-500/50 text-gray-300 hover:text-white transition-all duration-300 hover:shadow-glow"
                  aria-label="GitHub Profile"
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Github className="w-5 h-5" />
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/sandaruwan-linkdin/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-primary-500/50 text-gray-300 hover:text-white transition-all duration-300 hover:shadow-glow"
                  aria-label="LinkedIn Profile"
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Linkedin className="w-5 h-5" />
                </motion.a>
              </motion.div>
            </motion.div>

            {/* Profile image column */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="lg:w-1/2 flex justify-center perspective-1000"
            >
              <div className="relative w-72 h-72 md:w-96 md:h-96 group">
                <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-full blur-2xl opacity-50 group-hover:opacity-75 transition-opacity duration-500 animate-pulse"></div>
                <img
                  src={dp}
                  alt="Sandaruwan Weerawardhana"
                  className="relative rounded-full w-full h-full object-cover border-4 border-white/10 shadow-2xl z-10 transform transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll down indicator */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center z-20">
        <Link
          to="skills"
          spy={true}
          smooth={true}
          offset={-80}
          duration={800}
          className="cursor-pointer group"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="flex flex-col items-center"
          >
            <span className="text-xs text-gray-400 group-hover:text-white transition-colors mb-2 tracking-widest uppercase">Scroll Down</span>
            <ChevronDown className="w-6 h-6 text-primary-400 group-hover:text-primary-300 transition-colors" />
          </motion.div>
        </Link>
      </div>
    </section>
  );
};

export default Hero;