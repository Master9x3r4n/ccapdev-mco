import { createRouter, createWebHistory } from 'vue-router'
import LandingView from '../view/LandingView.vue'
import PlaygroundView from '../view/PlaygroundView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: LandingView,
    },
    {
      path: "/playground",
      name: "playground",
      component: PlaygroundView,
    }
  ],
})

export default router
