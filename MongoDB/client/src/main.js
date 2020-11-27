import { createApp } from 'vue'

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'

import AxiosPlugin from './plugin/axios';

import App from './App.vue'
createApp(App)
    .use(AxiosPlugin, {})
    .mount('#app')
