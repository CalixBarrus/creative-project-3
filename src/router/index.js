import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Animals from "../views/Animals.vue";
// import animals from "../animals-data.js";

Vue.use(VueRouter);

const routes = [{
    path: "/",
    name: "Home",
    component: Home
  },

  {
    path: "/animals",
    name: "Animals",
    component: Animals,
  },

];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;