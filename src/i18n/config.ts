import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './en/en.json';
import he from './hebrew/hebrew.json';

export const langResources = {
      en: {translation: en},
      he: {translation: he}
}

i18next.use(initReactI18next).init({
      compatibilityJSON: 'v3',
      debug: true,
      lng: 'en',
      fallbackLng: 'en',
      interpolation: {
        escapeValue: false, // not needed for react as it escapes by default
      },
    resources: langResources
});

export default i18next;