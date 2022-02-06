import 'element-plus/dist/index.css';

import { createApp } from 'vue';

import axios from 'axios';
import ElementPlus from 'element-plus';
import VueAxios from 'vue-axios';

import App from './App.vue';
import router from './router';
import store from './store';

createApp(App).use(store).use(ElementPlus).use(VueAxios,axios).use(router).mount('#app')
