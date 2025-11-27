'use client'

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

const LogoCarousel = ({ logos, interval = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % logos.length);
    }, interval);

    return () => clearInterval(timer);
  }, [logos.length, interval]);

  return (
    <div className="relative w-full h-32 flex items-center justify-center overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 0.8, rotateY: -90 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          exit={{ opacity: 0, scale: 0.8, rotateY: 90 }}
          transition={{ duration: 0.5 }}
          className="absolute flex items-center justify-center"
        >
          <img
            src={logos[currentIndex].path}
            alt={logos[currentIndex].name}
            className="w-20 h-20 object-contain"
          />
        </motion.div>
      </AnimatePresence>

      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-2">
        {logos.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? 'bg-accent-blue w-6'
                : 'bg-white/30 hover:bg-white/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default LogoCarousel;

