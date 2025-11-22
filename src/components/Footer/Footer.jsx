'use client'

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { useTranslation } from 'react-i18next';

const EmailIcon = '/assets/email-1.svg';

const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: '-100px' });

  return (
    <footer ref={ref} className="bg-dark-primary border-t border-gray-800 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="mb-4 md:mb-0"
          >
            <h3 className="text-2xl font-bold text-gradient mb-2">
              Kauã Cassiano
            </h3>
            <p className="text-gray-400 text-sm mb-3">
              {t('footer.role')}
            </p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex flex-col gap-3"
            >
              <div className="flex items-center gap-2">
                <img 
                  src={EmailIcon} 
                  alt="Email"
                  className="w-5 h-5"
                />
                <a 
                  href="mailto:equipe@khawantech.online"
                  className="text-gray-400 text-sm hover:text-gradient transition-colors duration-300"
                >
                  equipe@khawantech.online
                </a>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <a 
                  href="tel:+55219983546040"
                  className="text-gray-400 text-sm hover:text-gradient transition-colors duration-300"
                >
                  21983546040
                </a>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center md:text-right"
          >
            <p className="text-gray-500 text-sm mb-2">
              © {currentYear} Kauã Cassiano. {t('footer.rights')}.
            </p>
            <p className="text-gray-600 text-xs">
              {t('footer.madeWith')}
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

