import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import DoktorLogin from '../views/DoktorLogin.vue'


const routes = [
  
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path:'/doktor',
    name:'doctor',
    component: DoktorLogin
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
