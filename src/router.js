import Vue from "vue";
import Router from "vue-router";
import store from "./stores";
import { CURRENT_ROUTE } from "./constants";
import DashboardV1 from "./components/DashboardV1.vue";
import DashboardV2 from "./components/DashboardV2.vue";
import DashboardV3 from "./components/DashboardV3.vue";
import Widget from "./components/Widget.vue";
import ListPost from "./components/Post/ListPost.vue";
import DetailPost from "./components/Post/DetailPost.vue";

Vue.use(Router);

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/v1",
      alias: "/",
      name: "Dashboard V1",
      component: DashboardV1,
    },
    {
      path: "/v2",
      name: "Dashboard V2",
      component: DashboardV2,
    },
    {
      path: "/v3",
      name: "Dashboard V3",
      component: DashboardV3,
    },
    {
      path: "/widget",
      name: "Widget",
      component: Widget,
    },
    {
      path: "/post",
      name: "Post",
      component: ListPost,
    },
    {
      path: "/post/:id",
      name: "Detail Post",
      component: DetailPost,
    },
    {
      path: "/",
      redirect: "/v1",
    },
  ]
});
router.beforeEach ((to, from, next) => {
  store.commit(CURRENT_ROUTE, to.path);
  next();
})
export default router;
