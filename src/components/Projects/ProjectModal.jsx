import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import ImageGallery from './ImageGallery';

const ProjectModal = ({ project, onClose, selectedImageIndex, onImageChange, onImageExpand }) => {
  const { t } = useTranslation();

  if (!project) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
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
                src={project.logo} 
                alt={project.title}
                className="w-12 h-12 object-contain"
              />
              <div>
                <h2 className="text-2xl font-bold text-gradient">
                  {project.title}
                </h2>
                <p className="text-gray-400 text-sm">
                  {project.shortDescription}
                </p>
              </div>
            </div>
            <button
              onClick={onClose}
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
                {t('projects.technologies')}
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-dark-tertiary rounded-md text-sm text-gray-300 border border-gray-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {project.integrations ? (
              <div>
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-white mb-4">
                    {t('projects.aboutProject')}
                  </h3>
                  <p className="text-gray-300 leading-relaxed mb-6">
                    {t('projects.integrationsDescription')}
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-white mb-4">
                    {t('projects.implementedIntegrations')}
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {project.integrations.map((integration, index) => (
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
                    {t('projects.description')}
                  </h3>
                  <p className="text-gray-300 whitespace-pre-line leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {project.link && (
                  <div className="mb-6">
                    <a
                      href={project.link}
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
                        {t('projects.discordLink')}
                      </a>
                  </div>
                )}

                {project.images && project.images.length > 0 && (
                  <ImageGallery
                    images={project.images}
                    selectedIndex={selectedImageIndex}
                    onImageChange={onImageChange}
                    onImageExpand={onImageExpand}
                  />
                )}
              </>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ProjectModal;

