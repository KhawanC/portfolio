import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import pt from './locales/pt.json';
import en from './locales/en.json';

if (!i18n.isInitialized && typeof window !== 'undefined') {
  i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
      resources: {
        pt: { translation: pt },
        en: { translation: en }
      },
      fallbackLng: 'pt',
      supportedLngs: ['pt', 'en'],
      detection: {
        order: ['localStorage', 'navigator'],
        caches: ['localStorage']
      },
      interpolation: {
        escapeValue: false
      },
      react: {
        useSuspense: false
      }
    });
}

export default i18n;

