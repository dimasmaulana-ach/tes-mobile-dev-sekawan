// import i18n from 'i18next';
import i18next from 'i18next';
import {initReactI18next} from 'react-i18next';
import en from './lang/en.json';
import id from './lang/id.json';
import { getItem, setItem } from '~utils';

const lang = getItem('lang')

i18next.use(initReactI18next).init({
  compatibilityJSON: 'v3',
  resources: {
    en : {translation: en},
    id: {translation: id},
  },
  lng: lang ?? 'en',
  fallbackLng: lang ?? 'en',
  interpolation: {
    escapeValue: false,
  },
});

export const changeLang = language => {
  i18next.changeLanguage(language);
  setItem('lang', language)
};

export default i18next