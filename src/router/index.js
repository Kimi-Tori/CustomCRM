import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/home.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/test',
    name: 'test',
    component: () => import('../views/clients.vue')
  },
  {
    path: '/test',
    name: 'test',
    component: () => import('../views/finansial.vue')
  },
  {
    path: '/test',
    name: 'test',
    component: () => import('../views/ibs.vue')
  },
  {
    path: '/test',
    name: 'test',
    component: () => import('../views/reports.vue')
  },
  {
    path: '/test',
    name: 'test',
    component: () => import('../views/configuration.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
