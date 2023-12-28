// import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import axios from 'axios'
import VueSweetalert2 from 'vue-sweetalert2'
import router from './router'
import 'sweetalert2/dist/sweetalert2.min.css';

axios.defaults.baseURL = "http://127.0.0.1:8000/api/v1"

const app = createApp(App)

app.use(router)
app.use(VueSweetalert2)

app.mount('#app')
