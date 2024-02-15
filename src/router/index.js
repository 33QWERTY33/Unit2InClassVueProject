import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/counter',
      name: 'Counter',
      component: () => import('../views/CounterView.vue')
    },
    {
      path: '/form',
      name: 'Form',
      component: () => import('../views/FormView.vue')
    },
    {
      path: '/alert',
      name: 'Alert',
      component: () => import('../views/AlertView.vue')
    }
  ]
})

export default router
