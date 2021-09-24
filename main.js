import { createApp } from "vue";
import App from "./App";

const app = createApp(App);
window.__app = app;
app.mount("#app");
