import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'

import './bootstrap'
import router from './router'
import axiosInstance from './axios'

const pinia = createPinia();

const app = createApp(App)
app.use(pinia)
app.use(router)
app.config.globalProperties.$axios = axiosInstance
app.mount('#app')
