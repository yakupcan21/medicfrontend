import { createRouter, createWebHistory } from 'vue-router'

import LoginPage from '../views/LoginPage.vue'
import ProfilePage from '../views/ProfilePage.vue'



const routes = [
  
  {
    path: '/',
    name: 'home',
    component: LoginPage
  },
  {
    path: '/profile',
    name: 'profile',
    component: ProfilePage
  },
  

]



const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
