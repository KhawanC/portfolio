import { motion, AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';

const ExpandedImageModal = ({ project, imageIndex, onClose, onNext, onPrev }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (imageIndex !== null) {
        if (e.key === 'Escape') {
          onClose();
        } else if (e.key === 'ArrowLeft') {
          onPrev();
        } else if (e.key === 'ArrowRight') {
          onNext();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [imageIndex, onClose, onNext, onPrev]);

  if (imageIndex === null || !project) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-black/95 z-[60] flex items-center justify-center p-4"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors p-2 z-10"
        >
          <svg
            className="w-8 h-8"
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

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          onClick={(e) => e.stopPropagation()}
          className="relative w-full h-full flex items-center justify-center"
        >
          <img
            src={project.images[imageIndex]}
            alt={`Screenshot expandido ${imageIndex + 1}`}
            className="max-w-full max-h-full object-contain"
          />

          {project.images.length > 1 && (
            <>
              <button
                onClick={onPrev}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-dark-secondary/90 hover:bg-dark-secondary text-white p-3 rounded-full border border-gray-700 transition-colors"
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
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
              <button
                onClick={onNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-dark-secondary/90 hover:bg-dark-secondary text-white p-3 rounded-full border border-gray-700 transition-colors"
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
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </>
          )}

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-dark-secondary/90 px-4 py-2 rounded-lg border border-gray-700">
            <p className="text-white text-sm">
              {imageIndex + 1} / {project.images.length}
            </p>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ExpandedImageModal;

