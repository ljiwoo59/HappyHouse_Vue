import Vue from "vue";
import VueRouter from "vue-router";
// import Home from "../views/Home.vue";
import QnaList from "@/views/QnaList.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "QnaList",
    component: QnaList,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
