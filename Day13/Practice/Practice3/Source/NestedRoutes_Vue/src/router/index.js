import { createRouter, createWebHistory } from "vue-router";
import About from "../components/About.vue";
import Child from "../components/Child.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/about",
      name: "about",
      component: About,
      children: [
        {
          path: "child",
          component: Child,
        },
      ],
    },
  ],
});

export default router;
