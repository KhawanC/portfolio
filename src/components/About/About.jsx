import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: '-100px' });

  const experiences = [
    {
      title: 'Landing Pages',
      description: 'Criação de páginas de conversão otimizadas e responsivas',
      icon: '🎨',
    },
    {
      title: 'Sistemas Robustos',
      description: 'Desenvolvimento de sistemas complexos e escaláveis',
      icon: '⚙️',
    },
    {
      title: 'Automações WhatsApp',
      description: 'Automações inteligentes para WhatsApp Business',
      icon: '💬',
    },
    {
      title: 'Bots Discord',
      description: 'Bots personalizados para comunidades Discord',
      icon: '🤖',
    },
    {
      title: 'Fluxos n8n',
      description: 'Automação de processos com workflows n8n',
      icon: '🔄',
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
      id="about"
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
            <span className="text-gradient">Sobre</span> Mim
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
            Desenvolvedor Web Fullstack com experiência em criação de landing
            pages, sistemas robustos e complexos, automações para WhatsApp, bots
            para Discord, fluxos n8n e muito mais.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="flex flex-wrap justify-evenly gap-6 lg:gap-8"
        >
          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{
                y: -8,
                scale: 1.05,
                transition: {
                  duration: 0.3,
                  ease: "easeOut"
                }
              }}
              className="relative bg-dark-tertiary/50 backdrop-blur-sm p-6 rounded-2xl border border-gray-800 group cursor-pointer overflow-hidden w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)]"
            >
                <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/0 to-accent-purple/0 group-hover:from-accent-blue/20 group-hover:to-accent-purple/20 rounded-2xl transition-opacity duration-300 pointer-events-none" />
                <div className="relative z-10">
                  <div className="text-4xl mb-4">
                    {experience.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-accent-blue transition-colors duration-300">
                    {experience.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                    {experience.description}
                  </p>
                </div>
              </motion.div>
            ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;

