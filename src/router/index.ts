import { createRouter, createWebHistory } from "vue-router";
import HomeVue from "../components/Home.vue";
import SignUpVue from "../components/SignUp.vue";
import RegisterVue from "../components/SignUp.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeVue,
  },
  {
    path: "/signup",
    name: "SignUp",
    component: SignUpVue,
  },
  {
    path: "/desk",
    name: "Desk",
    component: () => import("../components/Desk.vue"),
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
