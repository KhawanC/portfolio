'use client'

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { getProjects } from './projectsData';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';
import ExpandedImageModal from './ExpandedImageModal';

const Projects = () => {
  const { t } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: '-100px' });
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [expandedImageIndex, setExpandedImageIndex] = useState(null);

  const projects = useMemo(() => getProjects(t), [t]);

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

  const expandImage = (index) => {
    setExpandedImageIndex(index);
  };

  const closeExpandedImage = () => {
    setExpandedImageIndex(null);
    if (!selectedProject) {
      document.body.style.overflow = 'unset';
    }
  };

  const nextExpandedImage = () => {
    if (selectedProject && expandedImageIndex !== null) {
      setExpandedImageIndex((prev) => 
        prev === selectedProject.images.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevExpandedImage = () => {
    if (selectedProject && expandedImageIndex !== null) {
      setExpandedImageIndex((prev) => 
        prev === 0 ? selectedProject.images.length - 1 : prev - 1
      );
    }
  };

  const allProjects = useMemo(() => {
    const totalProjects = 6;
    const emptySlots = Math.max(0, totalProjects - projects.length);
    return [...projects, ...Array(emptySlots).fill(null)];
  }, [projects]);

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
              {t('projects.title')} <span className="text-gradient">{t('projects.titleHighlight')}</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
              {t('projects.description')}
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          >
            {allProjects.map((project, index) => (
              <ProjectCard
                key={project?.id || index}
                project={project}
                variants={itemVariants}
                onOpen={openModal}
              />
            ))}
          </motion.div>
        </div>
      </section>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={closeModal}
          selectedImageIndex={selectedImageIndex}
          onImageChange={setSelectedImageIndex}
          onImageExpand={expandImage}
        />
      )}

      {selectedProject && (
        <ExpandedImageModal
          project={selectedProject}
          imageIndex={expandedImageIndex}
          onClose={closeExpandedImage}
          onNext={nextExpandedImage}
          onPrev={prevExpandedImage}
        />
      )}
    </>
  );
};

export default Projects;
