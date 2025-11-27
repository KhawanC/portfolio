'use client'

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import LogoCarousel from './LogoCarousel';

const Skills = () => {
  const { t } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: '-100px' });

  const websiteDeveloperLogos = [
    { name: 'Next.js', path: '/assets/icons8-next.js-480.png' },
    { name: 'React', path: '/assets/React-icon.svg' },
    { name: 'Spring Boot', path: '/assets/spring-boot.svg' },
    { name: 'Angular', path: '/assets/Angular_logo.svg' },
    { name: 'Docker', path: '/assets/Docker-svgrepo-com.svg' },
    { name: 'Python', path: '/assets/python-svgrepo-com.svg' },
  ];

  const integrationDeveloperLogos = [
    { name: 'WhatsApp', path: '/assets/icons8-whatsapp-480.png' },
    { name: 'Mercado Pago', path: '/assets/icons8-mercado-pago-480.png' },
    { name: 'Nuvemshop', path: '/assets/nuvemshop_icon.png' },
    { name: 'TikTok', path: '/assets/icons8-tiktok-500.png' },
  ];

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
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
      id="skills"
      ref={ref}
      className="py-20 md:py-32 relative bg-dark-secondary"
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
          <p className="text-lg md:text-xl text-text-secondary max-w-3xl mx-auto">
            {t('skills.description')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            whileHover={{
              y: -8,
              transition: {
                duration: 0.3,
              }
            }}
            className="relative bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/0 to-accent-purple/0 group-hover:from-accent-blue/10 group-hover:to-accent-purple/10 transition-all duration-300" />
            <div className="relative z-10 p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="text-3xl">
                  {'</>'}
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white">
                  {t('skills.websiteDeveloper')}
                </h3>
              </div>
              <p className="text-text-secondary mb-6 text-sm md:text-base">
                {t('skills.websiteDeveloperDescription')}
              </p>
              <LogoCarousel logos={websiteDeveloperLogos} interval={3000} />
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            transition={{ delay: 0.2 }}
            whileHover={{
              y: -8,
              transition: {
                duration: 0.3,
              }
            }}
            className="relative bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-accent-cyan/0 to-accent-blue/0 group-hover:from-accent-cyan/10 group-hover:to-accent-blue/10 transition-all duration-300" />
            <div className="relative z-10 p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="text-3xl">
                  ⚡
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white">
                  {t('skills.integrationDeveloper')}
                </h3>
              </div>
              <p className="text-text-secondary mb-6 text-sm md:text-base">
                {t('skills.integrationDeveloperDescription')}
              </p>
              <LogoCarousel logos={integrationDeveloperLogos} interval={3500} />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
