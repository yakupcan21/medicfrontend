import { createRouter, createWebHistory } from 'vue-router'

import LoginPage from '../views/LoginPage.vue'
import About from '../views/AboutView.vue'


const routes = [
  
  {
    path: '/',
    name: 'Home',
    component: LoginPage
  },

  {
    path: '/about',
    name: 'About',
    component: About
  }
  

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
