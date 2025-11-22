'use client'

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { useTranslation } from 'react-i18next';

const SpringBootIcon = '/assets/spring-boot.svg';
const ReactIcon = '/assets/React-icon.svg';
const AngularIcon = '/assets/Angular_logo.svg';
const DockerIcon = '/assets/Docker-svgrepo-com.svg';
const PythonIcon = '/assets/python-svgrepo-com.svg';

const Skills = () => {
  const { t } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: '-100px' });

  const skills = [
    { name: 'Java Spring Boot', icon: SpringBootIcon, color: 'from-green-500 to-emerald-600' },
    { name: 'React', icon: ReactIcon, color: 'from-blue-400 to-cyan-500' },
    { name: 'Angular', icon: AngularIcon, color: 'from-red-500 to-pink-600' },
    { name: 'Docker', icon: DockerIcon, color: 'from-blue-500 to-indigo-600' },
    { name: 'Python', icon: PythonIcon, color: 'from-yellow-400 to-amber-500' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 30 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.6,
        type: 'spring',
        stiffness: 100,
      },
    },
  };

  return (
    <section
      id="skills"
      ref={ref}
      className="py-20 md:py-32 relative bg-dark-primary"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            {t('skills.title')} <span className="text-gradient">{t('skills.titleHighlight')}</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
            {t('skills.description')}
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 lg:gap-8"
        >
          {skills.map((skill, index) => {
            const IconComponent = skill.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{
                  scale: 1.1,
                  rotateY: 10,
                  z: 50,
                }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300 bg-gradient-to-br from-accent-blue to-accent-purple rounded-2xl" />
                <div className="relative bg-dark-tertiary/80 backdrop-blur-sm p-8 rounded-2xl border border-gray-800 group-hover:border-transparent transition-all duration-300 h-full flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center shadow-lg group-hover:shadow-2xl transition-shadow duration-300">
                      <img 
                        src={IconComponent} 
                        alt={skill.name}
                        className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <h3 className="text-lg font-semibold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-accent-blue group-hover:to-accent-purple transition-all duration-300">
                      {skill.name}
                    </h3>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
