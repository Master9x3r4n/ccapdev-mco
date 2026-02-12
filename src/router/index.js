import { createRouter, createWebHistory } from 'vue-router'
import LandingView from '../view/LandingView.vue'
import PlaygroundView from '../view/PlaygroundView.vue'
import ListingView from '../view/ListingView.vue'
import ProfileView from '../view/ProfileView.vue'
import ReviewsView from '../view/ReviewsView.vue'
import SearchView from '../view/SearchView.vue'
import LoginView from "@/view/LoginView.vue";
import ProfileEx1 from "@/view/ProfileEx1.vue";
import ProfileEx2 from "@/view/ProfileEx2.vue";
import ProfileEx3 from "@/view/ProfileEx3.vue";
import ListingEx1 from "@/view/listing-ex/ListingEx1.vue";
import ListingEx2 from "@/view/listing-ex/ListingEx2.vue";
import ListingEx3 from "@/view/listing-ex/ListingEx3.vue";
import ReviewEx1 from "@/view/reviews-ex/ReviewEx1.vue";
import ReviewEx2 from "@/view/reviews-ex/ReviewEx2.vue";
import ReviewEx3 from "@/view/reviews-ex/ReviewEx3.vue";

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
    {
      path: "/listing2",
      name: "listing2",
      component: ListingEx2,
      meta: { search: true, loggedIn: true },
    },
    {
      path: "/listing3",
      name: "listing3",
      component: ListingEx3,
      meta: { search: true, loggedIn: true },
    },
    {
      path: "/reviews1",
      name: "reviews1",
      component: ReviewEx1,
      meta: { search: true, loggedIn: true },
    },
    {
      path: "/reviews2",
      name: "reviews2",
      component: ReviewEx2,
      meta: { search: true, loggedIn: true },
    },
    {
      path: "/reviews3",
      name: "reviews3",
      component: ReviewEx3,
      meta: { search: true, loggedIn: true },
    },
  ],
})

export default router
