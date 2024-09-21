import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import setupPrimeVue from '@/primevue-components.js'
import router from '@/router.js'

const app = createApp(App)
setupPrimeVue(app)

app.use(router)

app.mount('#app')

