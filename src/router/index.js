import { createRouter, createWebHistory } from "vue-router";

import HomePage from "../pages/HomePage.vue";
const routes = [
  {
    path: "/",
    component: HomePage,
    name: "Home",
    meta: {},
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
