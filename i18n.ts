import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import pt from "./public/locales/pt/common.json";
import en from "./public/locales/en/common.json";

i18n.use(initReactI18next).init({
  fallbackLng: "pt",
  lng: "pt", // ou detectar via router
  resources: {
    pt: { common: pt },
    en: { common: en },
  },
  ns: ["common"],
  defaultNS: "common",
  interpolation: {
    escapeValue: false,
  },
  react: {
    useSuspense: false,
  },
});
export default i18n;
