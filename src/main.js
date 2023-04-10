import { createApp } from 'vue'
import './style.css'

import router from './router'
import rest from './rest-api'
import App from './App.vue'

import BootstrapVue3 from 'bootstrap-vue-3'

import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'
import 'bootstrap/dist/css/bootstrap.css'

const app = createApp(App)
app.use(router);
app.use(BootstrapVue3)
app.provide('http', rest);
app.mount('#app')
