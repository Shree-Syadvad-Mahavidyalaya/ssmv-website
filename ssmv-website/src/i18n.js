import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationEn from './locales/en/translation.json';
import translationHi from './locales/hi/translation.json';

const resources = {
  en: {
    translation: translationEn,
  },
  hi: {
    translation: translationHi,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'en',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
