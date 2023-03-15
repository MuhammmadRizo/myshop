import en from "./TranslateLanguages/eng.json";
import ru from "./TranslateLanguages/rus.json";
import uz from "./TranslateLanguages/uzb.json";

import { initReactI18next } from "react-i18next";
import i18 from "i18next";

const resources = {
  en: { translation: en },
  ru: { translation: ru },
  uz: { translation: uz },
};

i18.use(initReactI18next).init({
  resources,
  lng: JSON.parse(localStorage.getItem("language")),
  fallbacking: "ru",
});

export default i18;
