import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import MoonlightLogo from '../../assets/moonlight-bot/logo_moonlight.gif';
import Screenshot1 from '../../assets/moonlight-bot/Captura de tela 2025-11-07 061620.png';
import Screenshot2 from '../../assets/moonlight-bot/Captura de tela 2025-11-07 061659.png';
import Screenshot3 from '../../assets/moonlight-bot/Captura de tela 2025-11-07 061723.png';
import Screenshot4 from '../../assets/moonlight-bot/Captura de tela 2025-11-07 061748.png';
import Screenshot5 from '../../assets/moonlight-bot/Captura de tela 2025-11-07 061840.png';
import IntegracoesLogo from '../../assets/integrações/logo.png';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: '-100px' });
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const moonlightProject = {
    id: 'moonlight',
    title: 'Moonlight - Discord',
    shortDescription: 'BOT de interações e moderação para um servidor do Discord',
    logo: MoonlightLogo,
    technologies: ['Java', 'Spring Boot', 'JDA (lib)'],
    description: `Bot multi-funções utilizado como sistema principal do servidor, suas principais funcionalidades são:

• Sistema de pontos com lojinha para conseguir benefícios no servidor
• Sistema de pontos contém monitoramento em chats de texto e voz
• Relatórios diários com quantidade em horas gasta pelos membros em call
• Verificações de spam em chats de texto
• Monitoramento de pessoas AFK em calls
• Sistema de tickets robusto com relatórios e delegação de membros
• Integração com bot de inhouse do League of Legends para expandir sistema de pontos
• E muito mais!`,
    images: [Screenshot1, Screenshot2, Screenshot3, Screenshot4, Screenshot5],
    link: 'https://discord.gg/moonlightsrv'
  };

  const integracoesProject = {
    id: 'integracoes',
    title: 'Integrações entre sistemas',
    shortDescription: 'Desenvolvimento de integrações robustas entre diferentes sistemas e APIs',
    logo: IntegracoesLogo,
    technologies: ['Java', 'Python', 'Node'],
    integrations: [
      {
        category: 'E-commerce e Pagamentos',
        items: ['Mercado Livre', 'Mercado Pago', 'Splits de pagamento (Stripe, Mercado Pago, Asaas)']
      },
      {
        category: 'Comunicação',
        items: ['WhatsApp (API oficial e Evolution API)']
      },
      {
        category: 'Sistemas Jurídicos',
        items: ['Datajud', 'PJ-E', 'E-PROC', 'E-SAJ']
      },
      {
        category: 'Autenticação e Segurança',
        items: ['OAuth 2.0', 'JWT (JSON Web Tokens)', 'Auth0', 'Keycloak']
      },
      {
        category: 'Notificações',
        items: ['Email (SendGrid, Mailgun)', 'SMS (Twilio)', 'Push Notifications (Firebase Cloud Messaging)']
      },
      {
        category: 'Armazenamento em Nuvem',
        items: ['AWS S3', 'Google Cloud Storage', 'Azure Blob Storage']
      },
      {
        category: 'Utilitários',
        items: ['ViaCep', 'Google Maps API', 'Correios API']
      },
      {
        category: 'Inteligência Artificial',
        items: ['OpenAI', 'Google AI', 'Azure AI']
      }
    ],
    images: []
  };

  const projects = [moonlightProject, integracoesProject, ...Array(4).fill(null)];

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
    hidden: { opacity: 0, y: 50, rotateX: -15 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.6,
        type: 'spring',
        stiffness: 100,
      },
    },
  };

  const openModal = (project) => {
    if (project) {
      setSelectedProject(project);
      setSelectedImageIndex(0);
      document.body.style.overflow = 'hidden';
    }
  };

  const closeModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'unset';
  };

  const nextImage = () => {
    if (selectedProject) {
      setSelectedImageIndex((prev) => 
        prev === selectedProject.images.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = () => {
    if (selectedProject) {
      setSelectedImageIndex((prev) => 
        prev === 0 ? selectedProject.images.length - 1 : prev - 1
      );
    }
  };

  return (
    <>
      <section
        id="projects"
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
              Meus <span className="text-gradient">Projetos</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
              Alguns dos projetos que desenvolvi ao longo da minha jornada
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          >
            {projects.map((project, index) => (
              <motion.div
                key={project?.id || index}
                variants={itemVariants}
                whileHover={{
                  y: -15,
                  rotateY: 5,
                  rotateX: 5,
                  z: 50,
                }}
                className="group perspective-1000"
              >
                {project ? (
                  <motion.div
                    onClick={() => openModal(project)}
                    className="relative h-full bg-dark-tertiary/50 backdrop-blur-sm rounded-2xl border border-gray-800 group-hover:border-accent-blue/50 transition-all duration-300 overflow-hidden cursor-pointer"
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/10 via-accent-purple/10 to-accent-pink/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    <div className="p-8 h-full flex flex-col items-center justify-center min-h-[300px] relative z-10">
                      <div className="w-20 h-20 rounded-full bg-gradient-to-br from-accent-blue to-accent-purple opacity-20 group-hover:opacity-40 transition-opacity duration-300 mb-6 flex items-center justify-center overflow-hidden">
                        <img 
                          src={project.logo} 
                          alt={project.title}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      
                      <h3 className="text-xl font-semibold text-gray-400 group-hover:text-white transition-colors duration-300 mb-2 text-center">
                        {project.title}
                      </h3>
                      <p className="text-sm text-gray-500 text-center">
                        {project.shortDescription}
                      </p>
                      <div className="flex flex-wrap gap-2 mt-4 justify-center">
                        {project.technologies.map((tech, techIndex) => (
                          <span 
                            key={techIndex}
                            className="text-xs px-2 py-1 bg-dark-secondary rounded-md text-gray-400"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="absolute inset-0 bg-gradient-to-t from-dark-tertiary via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </motion.div>
                ) : (
                  <div className="relative h-full bg-dark-tertiary/50 backdrop-blur-sm rounded-2xl border border-gray-800 group-hover:border-accent-blue/50 transition-all duration-300 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/10 via-accent-purple/10 to-accent-pink/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    <div className="p-8 h-full flex flex-col items-center justify-center min-h-[300px] relative z-10">
                      <div className="w-20 h-20 rounded-full bg-gradient-to-br from-accent-blue to-accent-purple opacity-20 group-hover:opacity-40 transition-opacity duration-300 mb-6 flex items-center justify-center">
                        <svg
                          className="w-10 h-10 text-gray-500 group-hover:text-accent-blue transition-colors duration-300"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                          />
                        </svg>
                      </div>
                      
                      <h3 className="text-xl font-semibold text-gray-400 group-hover:text-white transition-colors duration-300 mb-2">
                        Projeto em breve
                      </h3>
                      <p className="text-sm text-gray-500 text-center">
                        Este projeto será adicionado em breve
                      </p>
                    </div>

                    <div className="absolute inset-0 bg-gradient-to-t from-dark-tertiary via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <AnimatePresence>
        {selectedProject && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModal}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-dark-secondary rounded-2xl border border-gray-800 max-w-6xl w-full max-h-[90vh] overflow-y-auto"
              >
                <div className="sticky top-0 bg-dark-secondary/95 backdrop-blur-sm border-b border-gray-800 p-6 flex items-center justify-between z-10">
                  <div className="flex items-center gap-4">
                    <img 
                      src={selectedProject.logo} 
                      alt={selectedProject.title}
                      className="w-12 h-12 object-contain"
                    />
                    <div>
                      <h2 className="text-2xl font-bold text-gradient">
                        {selectedProject.title}
                      </h2>
                      <p className="text-gray-400 text-sm">
                        {selectedProject.shortDescription}
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={closeModal}
                    className="text-gray-400 hover:text-white transition-colors p-2"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>

                <div className="p-6">
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-white mb-3">
                      Tecnologias
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-dark-tertiary rounded-md text-sm text-gray-300 border border-gray-700"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {selectedProject.integrations ? (
                    <div>
                      <div className="mb-6">
                        <h3 className="text-lg font-semibold text-white mb-4">
                          Sobre o Projeto
                        </h3>
                        <p className="text-gray-300 leading-relaxed mb-6">
                          Já tive a oportunidade de implementar no backend diversas integrações entre sistemas, 
                          conectando diferentes plataformas e serviços para criar soluções completas e eficientes.
                        </p>
                      </div>

                      <div>
                        <h3 className="text-lg font-semibold text-white mb-4">
                          Integrações Implementadas
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {selectedProject.integrations.map((integration, index) => (
                            <motion.div
                              key={index}
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: index * 0.1 }}
                              className="bg-dark-tertiary/50 border border-gray-800 rounded-xl p-5 hover:border-accent-blue/50 transition-all duration-300"
                            >
                              <div className="flex items-center gap-3 mb-3">
                                <div className="w-2 h-2 rounded-full bg-gradient-to-r from-accent-blue to-accent-purple" />
                                <h4 className="text-lg font-semibold text-gradient">
                                  {integration.category}
                                </h4>
                              </div>
                              <div className="flex flex-wrap gap-2">
                                {integration.items.map((item, itemIndex) => (
                                  <span
                                    key={itemIndex}
                                    className="px-3 py-1.5 bg-dark-secondary rounded-lg text-sm text-gray-300 border border-gray-700 hover:border-accent-purple/50 transition-colors"
                                  >
                                    {item}
                                  </span>
                                ))}
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <>
                      <div className="mb-6">
                        <h3 className="text-lg font-semibold text-white mb-3">
                          Descrição
                        </h3>
                        <p className="text-gray-300 whitespace-pre-line leading-relaxed">
                          {selectedProject.description}
                        </p>
                      </div>

                      {selectedProject.link && (
                        <div className="mb-6">
                          <a
                            href={selectedProject.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-accent-blue to-accent-purple text-white rounded-lg font-semibold hover:from-accent-purple hover:to-accent-pink transition-all duration-300 transform hover:scale-105"
                          >
                            <svg
                              className="w-5 h-5"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
                            </svg>
                            Entrar no Discord
                          </a>
                        </div>
                      )}

                      {selectedProject.images && selectedProject.images.length > 0 && (
                        <div>
                          <h3 className="text-lg font-semibold text-white mb-4">
                            Galeria
                          </h3>
                          <div className="relative">
                            <div className="relative w-full h-96 bg-dark-tertiary rounded-lg overflow-hidden mb-4">
                              <img
                                src={selectedProject.images[selectedImageIndex]}
                                alt={`Screenshot ${selectedImageIndex + 1}`}
                                className="w-full h-full object-contain"
                              />
                              {selectedProject.images.length > 1 && (
                                <>
                                  <button
                                    onClick={prevImage}
                                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-dark-secondary/90 hover:bg-dark-secondary text-white p-2 rounded-full border border-gray-700 transition-colors"
                                  >
                                    <svg
                                      className="w-5 h-5"
                                      fill="none"
                                      stroke="currentColor"
                                      viewBox="0 0 24 24"
                                    >
                                      <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M15 19l-7-7 7-7"
                                      />
                                    </svg>
                                  </button>
                                  <button
                                    onClick={nextImage}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-dark-secondary/90 hover:bg-dark-secondary text-white p-2 rounded-full border border-gray-700 transition-colors"
                                  >
                                    <svg
                                      className="w-5 h-5"
                                      fill="none"
                                      stroke="currentColor"
                                      viewBox="0 0 24 24"
                                    >
                                      <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M9 5l7 7-7 7"
                                      />
                                    </svg>
                                  </button>
                                </>
                              )}
                            </div>
                            <div className="flex gap-2 overflow-x-auto pb-2">
                              {selectedProject.images.map((image, index) => (
                                <button
                                  key={index}
                                  onClick={() => setSelectedImageIndex(index)}
                                  className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                                    selectedImageIndex === index
                                      ? 'border-accent-blue'
                                      : 'border-gray-700 hover:border-gray-600'
                                  }`}
                                >
                                  <img
                                    src={image}
                                    alt={`Thumbnail ${index + 1}`}
                                    className="w-full h-full object-cover"
                                  />
                                </button>
                              ))}
                            </div>
                            <p className="text-center text-gray-400 text-sm mt-2">
                              {selectedImageIndex + 1} / {selectedProject.images.length}
                            </p>
                          </div>
                        </div>
                      )}
                    </>
                  )}
                </div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Projects;
