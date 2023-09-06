import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import uz from "./locales/uz/tranlation.json"
import ru from "./locales/ru/tranlation.json"

const language = ['uz', 'ru'];

i18n
    // detect user language
    // learn more: https://github.com/i18next/i18next-browser-languageDetector
    .use(LanguageDetector)
    // pass the i18n instance to react-i18next.
    .use(initReactI18next)
    // init i18next
    // for all options read: https://www.i18next.com/overview/configuration-options
    .init({
        debug: true,
        fallbackLng: 'uz',
        whiteList: language,
        interpolation: {
            escapeValue: false, // not needed for react as it escapes by default
        },
        resources: {
            uz: {
              translation: uz,
            },
            ru: {
              translation: ru,
            },
          },
    });

export default i18n;