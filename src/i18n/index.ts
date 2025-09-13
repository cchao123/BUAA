import { MDYX_HOST } from '@/constants';
import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import * as en from './locales/en';
import * as zh from './locales/zh';

export const langList = [
  { label: 'EN', value: 'en' },
  { label: 'ZH', value: 'zh' },
  // { label: '繁體中文', value: 'zh_hant' },
  // { label: '日本語', value: 'jp' },
];

const resources = {
  zh,
  en,
};

const detectorOptions = {
  caches: ['localStorage'],
};

const savedLang = typeof window !== 'undefined' ? localStorage.getItem('lang') : null;

let defaultLang = 'en';
if (typeof window !== 'undefined') {
  if (window.location.hostname === MDYX_HOST) {
    defaultLang = 'zh';
  }
}

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    detection: detectorOptions,
    resources,
    lng: savedLang || defaultLang,
    fallbackLng: 'en',
    debug: process.env.NODE_ENV === 'development',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
