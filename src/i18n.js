import { createI18n } from "vue-i18n";
import en from "./locales/en.json";
import id from "./locales/id.json";

const i18n = createI18n({
  legacy: false, // You must specify 'legacy: false' to use the Composition API
  locale: "en", // Set the initial locale
  fallbackLocale: "en",
  messages: {
    en,
    id,
  },
});

export default i18n;
