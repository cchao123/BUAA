import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import * as en from './locales/en';
import * as zh from './locales/zh';

export const langList = [
  { label: 'ENGLISH', value: 'en' },
  { label: '简体中文', value: 'zh' },
];

const resources = {
  zh,
  en,
};

const detectorOptions = {
  caches: ['localStorage'],
};


let defaultLang = 'en';


i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    detection: detectorOptions,
    resources,
    lng: defaultLang,
    fallbackLng: 'en',
    debug: process.env.NODE_ENV === 'development',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
