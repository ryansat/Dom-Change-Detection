import { createRouter, createWebHistory } from "vue-router";
import DomDetection from "../components/DomDetection.vue";
import MathQuestion from "../components/MathQuestion.vue";

// Create router instance with 'createRouter'
const router = createRouter({
  history: createWebHistory(), // Use 'createWebHistory' for HTML5 history mode
  routes: [
    {
      path: "/",
      name: "Home",
      component: DomDetection,
    },
    {
      path: "/math-question",
      name: "MathQuestion",
      component: MathQuestion,
    },
  ],
});

export default router;
