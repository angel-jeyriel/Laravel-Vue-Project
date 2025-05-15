import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './style.css'
// import '@formkit/themes/genesis'
import { plugin, defaultConfig } from '@formkit/vue'
import config from "./../formkit.config";
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import ToastPlugin from 'vue-toast-notification';

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

createApp(App).use(router).use(pinia).use(ToastPlugin).use(plugin, defaultConfig(config)).mount('#app')
