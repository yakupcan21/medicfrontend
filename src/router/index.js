import { createRouter, createWebHistory } from 'vue-router'

import LoginPage from '../views/LoginPage.vue'
import ProfilePage from '../views/ProfilePage.vue'

import About from '../views/AboutView.vue'


const routes = [
  
  {
    path: '/',
    name: 'Home',
    name: 'home',
    component: LoginPage
  },
  {
    path: '/profile',
    name: 'profile',
    component: ProfilePage
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
