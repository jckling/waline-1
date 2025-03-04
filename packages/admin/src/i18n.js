import I18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

import langs from './locales/index.js';

// eslint-disable-next-line import-x/no-named-as-default-member
I18n.use(LanguageDetector)
  .use(initReactI18next)
  .init({
    // we init with resources
    resources: langs,
    fallbackLng: 'zh-CN',
    debug: true,

    // have a common namespace used around the full app
    ns: ['translations'],
    defaultNS: 'translations',

    keySeparator: false, // we use content as keys

    interpolation: {
      escapeValue: false,
    },
  });

export default I18n;
