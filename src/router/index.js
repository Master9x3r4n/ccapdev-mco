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
      meta: {search: false},
    },
    {
      path: "/playground",
      name: "playground",
      component: PlaygroundView,
      meta: {search: true},
    },
    {
      path: "/listing",
      name: "listing",
      component: ListingView,
      meta: {search: true},
    },
    {
      path: "/profile",
      name: "profile",
      component: ProfileView,
      meta: {search: true},
    },
    {
      path: "/reviews",
      name: "reviews",
      component: ReviewsView,
      meta: {search: true},
    },
    {
      path: "/search",
      name: "search",
      component: SearchView,
      meta: {search: true},
    }
  ],
})

export default router
