'use client'

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { useTranslation } from 'react-i18next';

const Hero = () => {
  const { t } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: '-100px' });

  const specialties = [
    {
      title: t('about.experiences.landingPages.title'),
      description: t('about.experiences.landingPages.description'),
    },
    {
      title: t('about.experiences.robustSystems.title'),
      description: t('about.experiences.robustSystems.description'),
    },
    {
      title: t('about.experiences.whatsappAutomations.title'),
      description: t('about.experiences.whatsappAutomations.description'),
    },
    {
      title: t('about.experiences.discordBots.title'),
      description: t('about.experiences.discordBots.description'),
    },
    {
      title: t('about.experiences.n8nFlows.title'),
      description: t('about.experiences.n8nFlows.description'),
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section
      id="hero"
      ref={ref}
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-dark-primary via-dark-secondary to-dark-primary py-20 md:py-32"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-blue/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-cyan/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
            className="space-y-8 order-2 lg:order-1"
          >
            <div className="flex gap-8 flex-wrap">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-center"
              >
                <div className="text-5xl md:text-6xl font-bold mb-2" style={{ color: '#4ECDC4' }}>
                  3+
                </div>
                <div className="text-text-secondary text-sm md:text-base uppercase tracking-wider">
                  {t('hero.stats.yearsExperience')}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-center"
              >
                <div className="text-5xl md:text-6xl font-bold mb-2" style={{ color: '#4ECDC4' }}>
                  70+
                </div>
                <div className="text-text-secondary text-sm md:text-base uppercase tracking-wider">
                  {t('hero.stats.satisfiedClients')}
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-text-primary">
                {t('hero.specialties')}
              </h3>
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? 'visible' : 'hidden'}
                className="space-y-4"
              >
                {specialties.map((specialty, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{
                      x: 8,
                      transition: {
                        duration: 0.3,
                      }
                    }}
                    className="relative bg-white/5 backdrop-blur-sm p-4 rounded-xl border border-white/10 group cursor-pointer"
                  >
                    <div>
                      <h4 className="text-base md:text-lg font-semibold text-white group-hover:text-accent-blue transition-colors duration-300 mb-1">
                        {specialty.title}
                      </h4>
                      <p className="text-text-secondary text-sm leading-relaxed">
                        {specialty.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8 }}
            className="space-y-8 order-1 lg:order-2"
          >
            <div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="inline-block px-4 py-2 bg-accent-blue/10 border border-accent-blue/30 rounded-full mb-4">
                  <span className="text-accent-blue text-sm font-semibold uppercase tracking-wider">
                    {t('hero.label')}
                  </span>
                </div>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight">
                  <span className="text-white">Kauã</span>{' '}
                  <span className="text-gradient">Cassiano</span>
                </h1>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-2xl md:text-3xl lg:text-4xl font-semibold text-text-secondary mb-6"
              >
                {t('hero.subtitle')}
              </motion.h2>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="bg-white/5 backdrop-blur-sm p-6 md:p-8 rounded-2xl border border-white/10"
            >
              <h3 className="text-xl md:text-2xl font-bold mb-4 text-white">
                {t('hero.aboutMe')}
              </h3>
              <p className="text-text-secondary text-base md:text-lg leading-relaxed">
                {t('hero.aboutMeDescription')}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex gap-4 flex-wrap"
            >
              <motion.button
                onClick={() => {
                  const element = document.getElementById('projects');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="px-8 py-4 bg-gradient-to-r from-accent-blue to-accent-purple text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(107, 127, 255, 0.4)' }}
                whileTap={{ scale: 0.95 }}
              >
                {t('hero.viewProjects')}
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
