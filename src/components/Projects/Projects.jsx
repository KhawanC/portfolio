'use client'

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { getProjects } from './projectsData';
import ImageGallery from './ImageGallery';
import ExpandedImageModal from './ExpandedImageModal';

const Projects = () => {
  const { t } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: '-100px' });
  const [selectedImageIndices, setSelectedImageIndices] = useState({});
  const [expandedImage, setExpandedImage] = useState(null);

  const projects = useMemo(() => getProjects(t), [t]);

  const setProjectImageIndex = (projectId, index) => {
    setSelectedImageIndices(prev => ({
      ...prev,
      [projectId]: index
    }));
  };

  const getProjectImageIndex = (projectId) => {
    return selectedImageIndices[projectId] || 0;
  };

  const expandImage = (project, index) => {
    setExpandedImage({ project, index });
    document.body.style.overflow = 'hidden';
  };

  const closeExpandedImage = () => {
    setExpandedImage(null);
    document.body.style.overflow = 'unset';
  };

  const nextExpandedImage = () => {
    if (expandedImage) {
      const { project, index } = expandedImage;
      const nextIndex = index === project.images.length - 1 ? 0 : index + 1;
      setExpandedImage({ project, index: nextIndex });
    }
  };

  const prevExpandedImage = () => {
    if (expandedImage) {
      const { project, index } = expandedImage;
      const prevIndex = index === 0 ? project.images.length - 1 : index - 1;
      setExpandedImage({ project, index: prevIndex });
    }
  };

  return (
    <>
      <section
        id="projects"
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
              {t('projects.title')} <span className="text-gradient">{t('projects.titleHighlight')}</span>
            </h2>
            <p className="text-lg md:text-xl text-text-secondary max-w-3xl mx-auto">
              {t('projects.description')}
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto relative">
            <div className="absolute left-0 md:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent-blue via-accent-cyan to-accent-purple" />

            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative pl-8 md:pl-24 pb-16 md:pb-24 last:pb-0"
              >
                <div className="absolute left-0 md:left-8 top-2 w-4 h-4 -translate-x-1/2 rounded-full bg-accent-blue border-4 border-dark-primary shadow-lg shadow-accent-blue/50" />

                <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden hover:border-accent-blue/30 transition-all duration-300">
                  <div className="p-6 md:p-8">
                    <div className="flex flex-wrap items-start gap-4 mb-4">
                      {project.logo && (
                        <img
                          src={project.logo}
                          alt={project.title}
                          className="w-16 h-16 rounded-lg object-cover"
                        />
                      )}
                      <div className="flex-1 min-w-0">
                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                          {project.title}
                        </h3>
                        {project.technologies && (
                          <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech, techIndex) => (
                              <span
                                key={techIndex}
                                className="px-3 py-1 text-xs font-semibold bg-accent-blue/20 text-accent-blue rounded-full border border-accent-blue/30"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>

                    {project.description && (
                      <div className="mb-6">
                        <h4 className="text-lg font-semibold text-white mb-3">
                          {t('projects.aboutProject')}
                        </h4>
                        <p className="text-text-secondary text-sm md:text-base leading-relaxed whitespace-pre-line">
                          {project.description}
                        </p>
                      </div>
                    )}

                    {project.integrations && (
                      <div className="mb-6">
                        <h4 className="text-lg font-semibold text-white mb-3">
                          {t('projects.implementedIntegrations')}
                        </h4>
                        <p className="text-text-secondary text-sm mb-4">
                          {t('projects.integrationsDescription')}
                        </p>
                        <div className="space-y-4">
                          {project.integrations.map((integration, intIndex) => (
                            <div key={intIndex}>
                              <h5 className="text-accent-cyan font-semibold mb-2 text-sm">
                                {integration.category}
                              </h5>
                              <div className="flex flex-wrap gap-2">
                                {integration.items.map((item, itemIndex) => (
                                  <span
                                    key={itemIndex}
                                    className="px-3 py-1 text-xs bg-white/5 text-text-secondary rounded-full border border-white/10"
                                  >
                                    {item}
                                  </span>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {project.images && project.images.length > 0 && (
                      <div>
                        <ImageGallery
                          images={project.images}
                          selectedIndex={getProjectImageIndex(project.id)}
                          onImageChange={(index) => setProjectImageIndex(project.id, index)}
                          onImageExpand={(index) => expandImage(project, index)}
                        />
                      </div>
                    )}

                    {project.link && (
                      <div className="mt-6">
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-accent-blue to-accent-purple text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-accent-blue/30 transition-all duration-300"
                        >
                          {t('projects.discordLink')}
                          <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                            />
                          </svg>
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {expandedImage && (
        <ExpandedImageModal
          project={expandedImage.project}
          imageIndex={expandedImage.index}
          onClose={closeExpandedImage}
          onNext={nextExpandedImage}
          onPrev={prevExpandedImage}
        />
      )}
    </>
  );
};

export default Projects;
