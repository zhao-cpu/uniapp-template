import { createSSRApp } from 'vue';
import * as Pinia from 'pinia';
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';
import App from './App.vue';
import 'virtual:uno.css';

const pinia = Pinia.createPinia();
pinia.use(piniaPluginPersistedstate);
const app = createSSRApp(App);

export function createApp() {
  app.use(pinia);
  return {
    app,
    Pinia,
  };
}
