import { createRouter, createWebHistory } from "vue-router";

import HomePage from "../pages/HomePage.vue";
import LearnPage from "../pages/LearnPage.vue";
import AboutPage from "../pages/AboutPage.vue";

const routes = [
  {
    path: "/",
    component: HomePage,
    name: "home",
    meta: {},
  },
  {
    path: "/learn",
    component: LearnPage,
    name: "learn",
    meta: {},
  },
  {
    path: "/about",
    component: AboutPage,
    name: "about",
    meta: {},
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
