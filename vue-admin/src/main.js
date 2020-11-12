import { createApp } from 'vue';

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

import Translator from './plugin/translator';

import App from './App.vue';

createApp(App)
    .use(Translator, {test: 1})
    .mount('#app');
