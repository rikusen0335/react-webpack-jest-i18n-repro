import i18n from "i18next";
import enYaml from "../../configs/locales/en.yml";

export const init = () => {
  i18n.init({
    fallbackLng: "en",
    ns: ["translation"],
    defaultNS: "translation",
    resources: {
      en: { translation: enYaml },
    },
  });
};
