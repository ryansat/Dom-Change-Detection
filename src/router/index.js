import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "../components/Dashboard.vue";
import DomDetection from "../components/DomDetection.vue";
import MathQuestion from "../components/MathQuestion.vue";
import AdminFormConfig from "../components/AdminFormConfig.vue"; // Import the AdminFormConfig component
import DynamicForm from "../components/DynamicForm.vue"; // Import the DynamicForm component

// Create router instance with 'createRouter'
const router = createRouter({
  history: createWebHistory(), // Use 'createWebHistory' for HTML5 history mode
  routes: [
    {
      path: "/",
      name: "Dashboard",
      component: Dashboard,
    },
    {
      path: "/dom-detection",
      name: "DomDetection",
      component: DomDetection,
    },
    {
      path: "/math-question",
      name: "MathQuestion",
      component: MathQuestion,
    },
    {
      path: "/admin-form-config", // Define a path for the admin form configuration page
      name: "AdminFormConfig",
      component: AdminFormConfig,
    },
    {
      path: "/dynamic-form", // Define a path for the dynamic form page
      name: "DynamicForm",
      component: DynamicForm,
    },
  ],
});

export default router;
