import { createRouter, createWebHistory } from 'vue-router'
import LandingView from '../view/LandingView.vue'
import PlaygroundView from '../view/PlaygroundView.vue'
import ListingView from '../view/ListingView.vue'
import ProfileView from '../view/ProfileView.vue'
import ReviewsView from '../view/ReviewsView.vue'
import SearchView from '../view/SearchView.vue'

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
    },
    {
      path: "/listing",
      name: "listing",
      component: ListingView,
    },
    {
      path: "/profile",
      name: "profile",
      component: ProfileView,
    },
    {
      path: "/reviews",
      name: "reviews",
      component: ReviewsView
    },
    {
      path: "/search",
      name: "search",
      component: SearchView
    }
  ],
})

export default router
