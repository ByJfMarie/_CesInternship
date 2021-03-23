import axios from 'axios'
import { createApp, ref } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

export default {
    setup() {
        console.log("test");
    }
}

createApp(App).use(store).use(router).mount('#app')

axios.defaults.withCredentials = true;
axios.defaults.baseURL = 'http://localhost:8000';
