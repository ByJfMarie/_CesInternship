import axios from 'axios'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

createApp(App).use(store).use(router).mount('#app')

axios.defaults.withCredentials = true;
axios.defaults.baseURL = 'http://localhost:8000';
