import { createApp } from "vue";
import "./style.css";
import "./index.css";
import store from "./store";
import App from "./App.vue";
import router from "./router";

createApp(App).use(store).mount("#app").use(router);
