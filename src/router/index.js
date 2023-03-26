import { createRouter, createWebHistory } from 'vue-router';
import Home from "../pages/Home.vue"
import Page from "../pages/Page.vue"
const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
      path: "/pg1",
      name: "Page1",
      component: Page,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
