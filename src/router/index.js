import { createRouter, createWebHistory } from 'vue-router'
import LandingView from '../view/LandingView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: LandingView,
    }
  ],
})

export default router
