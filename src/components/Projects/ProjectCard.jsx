import { motion } from 'framer-motion';

const ProjectCard = ({ project, variants, onOpen }) => {
  if (!project) {
    return (
      <motion.div
        variants={variants}
        whileHover={{
          y: -15,
          rotateY: 5,
          rotateX: 5,
          z: 50,
        }}
        className="group perspective-1000"
      >
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
      </motion.div>
    );
  }

  return (
    <motion.div
      variants={variants}
      whileHover={{
        y: -15,
        rotateY: 5,
        rotateX: 5,
        z: 50,
      }}
      className="group perspective-1000"
    >
      <motion.div
        onClick={() => onOpen(project)}
        className="relative h-full bg-dark-tertiary/50 backdrop-blur-sm rounded-2xl border border-gray-800 group-hover:border-accent-blue/50 transition-all duration-300 overflow-hidden cursor-pointer"
        whileTap={{ scale: 0.98 }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/10 via-accent-purple/10 to-accent-pink/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        <div className="p-8 h-full flex flex-col items-center justify-center min-h-[300px] relative z-10 pb-16">
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

        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-30 pointer-events-auto">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onOpen(project);
            }}
            className="text-xs text-gray-400 group-hover:text-white transition-all duration-300 px-3 py-1.5 bg-dark-secondary/80 hover:bg-dark-secondary rounded-lg border border-gray-700 hover:border-gray-600 whitespace-nowrap"
          >
            Abrir
          </button>
        </div>

        <div className="absolute inset-0 bg-gradient-to-t from-dark-tertiary via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </motion.div>
    </motion.div>
  );
};

export default ProjectCard;

