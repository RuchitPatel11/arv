import { createRouter, createWebHistory } from "vue-router";
import List from "../components/List.vue";
import Student from "../components/Student.vue";
import Fees from "../components/Fees.vue";
import Result from "../components/Result.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/list",
      name: "list",
      component: List,
    },
    {
      path: "/student/:id",
      children: [
        {
          path: "",
          name: "student",
          component: Student,
        },
        {
          path: "fees",
          name: "fees",
          component: Fees,
        },
        {
          path: "result",
          name: "result",
          component: Result,
        },
      ],
    },
  ],
});

export default router;
