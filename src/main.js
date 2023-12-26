import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { VueResponsiveness } from 'vue-responsiveness'
import unoverlay from 'unoverlay-vue'

const app = createApp(App)
app.use(router)
app.use(unoverlay)
app.mount('#app')
app.use(VueResponsiveness)

