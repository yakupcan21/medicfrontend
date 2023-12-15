import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { VueResponsiveness } from 'vue-responsiveness'



createApp(App).use(router).mount('#app').use(VueResponsiveness)
