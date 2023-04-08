import { createRouter, createWebHistory } from 'vue-router';
import Home from "../pages/Home.vue"
import Page from "../pages/Page.vue"
const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
        meta: {
          caption: 'Home'
        },
    },
    {
      path: "/pg1",
      name: "Page1",
      component: Page,
      meta: {
        caption: 'Page1'
      },
},
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
