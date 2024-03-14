import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import i18n from "./i18n"; // Make sure this imports the i18n setup correctly

createApp(App).use(router).use(i18n).mount("#app");
