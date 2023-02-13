import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enYaml from "../../configs/locales/en.yml";

export const init = () => {
  i18n.use(initReactI18next).init({
    fallbackLng: "en",
    ns: ["translation"],
    defaultNS: "translation",
    resources: {
      en: { translation: enYaml },
      // en: { translation: { user: { account: "Account" } } },
    },
  });
};
