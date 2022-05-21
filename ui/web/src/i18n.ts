import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const translationEn = {
  'login': 'Login',
  'loginSubmit': 'Submit',
};

const translationZh = {
  'login': '登录',
  'loginSubmit': '确认登录',
};



const detectionOptions = {
  // order and from where user language should be detected
  order: ['querystring', 'localStorage', 'cookie'],

  // cache user language on
  caches: ['localStorage', 'cookie'],
}



i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: process.env.NODE_ENV === 'development',
    fallbackLng: 'zh',
    detection: detectionOptions,
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      en: { translation: translationEn },
      zh: { translation: translationZh },
    }
  });

  
  
(window as any).changeLanguage = (lang) => {
  i18n.changeLanguage(lang, (err, t) => {
    if (err) return console.log('something went wrong loading', err);
    t('key'); // -> same as i18next.t
  });
}

export default i18n;