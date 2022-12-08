import { createRouter, createWebHistory } from 'vue-router'
import AboutUs from '../components/AboutUs.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
     {
      path: '/about/:name',
      name: 'about',
      component:AboutUs
    }
  ]
})

export default router
