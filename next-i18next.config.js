import path from 'path';

export default {
  i18n: {
    defaultLocale: 'zh',
    locales: ['zh', 'en', 'fr', 'jp', 'zh_hant'],
  },
  defaultNS: 'translation',
  debug: process.env.NODE_ENV === 'development',
  reloadOnPrerender: process.env.NODE_ENV === 'development',
  localePath: typeof window === 'undefined' ? path.resolve('./src/i18n/locales') : '/locales',
};