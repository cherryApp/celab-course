import { createApp } from 'vue';

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

import Translator from './plugin/translator';
import axios from './plugin/axios.api';

import App from './App.vue';

createApp(App)
    .use(axios)
    .use(Translator, {
        locale: 'en', 
        url: '/translates'
    })
    .mount('#app');
