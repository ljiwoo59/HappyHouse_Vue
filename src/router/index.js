import Vue from "vue";
import VueRouter from "vue-router";
import QnaInput from "@/views/QnaInput.vue";
import QnaList from "@/views/QnaList.vue";
import QnaReply from "@/views/QnaReply.vue";
import QnaDetail from "@/views/QnaDetail.vue";
import QnaModify from "@/views/QnaModify.vue";

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
  {
    path: "/reply",
    name: "QnaReply",
    component: QnaReply,
  },
  {
    path: "/detail/:num",
    name: "QnaDetail",
    component: QnaDetail,
  },
  {
    path: "/modify/",
    name: "QnaModify",
    component: QnaModify,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
