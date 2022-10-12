import { createRouter, createWebHistory } from "vue-router";
import SignUpVue from "../components/SignUp.vue";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/register",
    name: "SignUp",
    component: SignUpVue,
  },
  {
    path: "/todo",
    name: "Todo",
    component: () => import("../views/Home.vue"),
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
