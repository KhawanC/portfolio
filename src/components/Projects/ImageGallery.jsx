'use client'

import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const ImageGallery = ({ images, selectedIndex, onImageChange, onImageExpand }) => {
  const { t } = useTranslation();

  if (!images || images.length === 0) return null;

  return (
    <div>
      <h3 className="text-lg font-semibold text-white mb-4">
        {t('projects.gallery')}
      </h3>
      <div className="relative">
        <div 
          className="relative w-full h-96 bg-dark-tertiary rounded-lg overflow-hidden mb-4 cursor-pointer group/image"
          onClick={() => onImageExpand(selectedIndex)}
        >
          <img
            src={images[selectedIndex]}
            alt={`Screenshot ${selectedIndex + 1}`}
            className="w-full h-full object-contain"
          />
          <div className="absolute inset-0 bg-black/50 opacity-0 group-hover/image:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
            <div className="text-white text-sm bg-dark-secondary/90 px-4 py-2 rounded-lg border border-gray-700">
              {t('projects.clickToExpand')}
            </div>
          </div>
          
          <div className="absolute top-3 right-3 md:hidden bg-dark-secondary/80 p-2 rounded-lg border border-gray-700 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
              />
            </svg>
          </div>

          {images.length > 1 && (
            <>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onImageChange(selectedIndex === 0 ? images.length - 1 : selectedIndex - 1);
                }}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-dark-secondary/90 hover:bg-dark-secondary text-white p-2 rounded-full border border-gray-700 transition-colors z-10"
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
                onClick={(e) => {
                  e.stopPropagation();
                  onImageChange(selectedIndex === images.length - 1 ? 0 : selectedIndex + 1);
                }}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-dark-secondary/90 hover:bg-dark-secondary text-white p-2 rounded-full border border-gray-700 transition-colors z-10"
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
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => onImageChange(index)}
              className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                selectedIndex === index
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
          {selectedIndex + 1} / {images.length}
        </p>
      </div>
    </div>
  );
};

export default ImageGallery;

