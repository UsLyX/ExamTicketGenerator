import { createApp } from 'vue';
import App from './App.vue';
import router from './router/index.js';
import './assets/layouts/style.css';

createApp(App).use(router).mount('#app');
