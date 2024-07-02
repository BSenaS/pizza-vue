import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PizzaView from '@/views/PizzaView.vue'
import SuccessView from '@/views/SuccessView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/pizza',
      name: 'pizza',
      component: PizzaView
    },
    {
      path: '/success',
      name: 'successPage',
      component: SuccessView
    }
  ]
})

export default router
