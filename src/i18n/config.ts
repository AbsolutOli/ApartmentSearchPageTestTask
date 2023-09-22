import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './en/en.json';
import hebrew from './hebrew/hebrew.json';

export const defaultNS = 'en';

i18next.use(initReactI18next).init({
    lng: 'en',
    debug: true,
    resources: {
        en: {
            en
        },
        hebrew: {
            hebrew
        }
    },
    defaultNS,
});