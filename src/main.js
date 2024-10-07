import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import { router } from './router'

import "./assets/main.css"

const pinia = createPinia()

pinia.use(piniaPluginPersistedstate)

createApp(App)
    .use(pinia)
    .use(router)
    .mount('#app')
