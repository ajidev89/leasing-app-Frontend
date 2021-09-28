import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './index.css'
import { store }  from './store/store.js'
import VueFeatherIcon from 'vue-feather-icon'

createApp(App).use(router).use(store).use(VueFeatherIcon).mount('#app')
