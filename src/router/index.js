import Vue from "vue";
import VueRouter from "vue-router";
import QnaInput from "@/views/QnaInput.vue";
import QnaList from "@/views/QnaList.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "QnaList",
    component: QnaList,
  },
  {
    path: "/input",
    name: "QnaInput",
    component: QnaInput,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
