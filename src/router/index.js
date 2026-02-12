import { createRouter, createWebHistory } from 'vue-router'
import LandingView from '../view/LandingView.vue'
import PlaygroundView from '../view/PlaygroundView.vue'
import ListingView from '../view/ListingView.vue'
import ProfileView from '../view/ProfileView.vue'
import ReviewsView from '../view/ReviewsView.vue'
import SearchView from '../view/SearchView.vue'
import RegisterView from "@/view/RegisterView.vue";
import LoginView from "@/view/LoginView.vue";
import ProfileEx1 from "@/view/ProfileEx1.vue";
import ProfileEx2 from "@/view/ProfileEx2.vue";
import ProfileEx3 from "@/view/ProfileEx3.vue";
import ListingEx1 from "@/view/listing-ex/ListingEx1.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: LandingView,
      meta: { search: false, loggedIn: true },
    },
    {
      path: "/login",
      name: "login",
      component: LoginView,
      meta: { search: false, loggedIn: false },
    },
    {
      path: "/register",
      name: "register",
      component: RegisterView,
      meta: { search: false, loggedIn: false },
    },
    {
      path: "/playground",
      name: "playground",
      component: PlaygroundView,
      meta: { search: true, loggedIn: true },
    },
    {
      path: "/listing",
      name: "listing",
      component: ListingView,
      meta: { search: true, loggedIn: true },
    },
    {
      path: "/profile",
      name: "profile",
      component: ProfileView,
      meta: { search: true, loggedIn: true },
    },
    {
      path: "/reviews",
      name: "reviews",
      component: ReviewsView,
      meta: { search: true, loggedIn: true },
    },
    {
      path: "/search",
      name: "search",
      component: SearchView,
      meta: { search: true, loggedIn: true },
    },
    {
      path: "/profile1",
      name: "profile1",
      component: ProfileEx1,
      meta: { search: true, loggedIn: true },
    },
    {
      path: "/profile2",
      name: "profile2",
      component: ProfileEx2,
      meta: { search: true, loggedIn: true },
    },
    {
      path: "/profile3",
      name: "profile3",
      component: ProfileEx3,
      meta: { search: true, loggedIn: true },
    },
    {
      path: "/listing1",
      name: "listing1",
      component: ListingEx1,
      meta: { search: true, loggedIn: true },
    },
  ],
})

export default router
