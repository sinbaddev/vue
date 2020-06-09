import Vue from "vue";
import Router from "vue-router";
import store from "./stores";
import { CURRENT_ROUTE } from "./constants";
import DashboardV1 from "./components/DashboardV1.vue";
import DashboardV2 from "./components/DashboardV2.vue";
import DashboardV3 from "./components/DashboardV3.vue";
import Widget from "./components/Widget.vue";
import ListBet from "./components/Pages/Bets/ListBet.vue";
import DetailBet from "./components/Pages/Bets/DetailBet.vue";
import ListRound from "./components/Pages/Rounds/ListRound.vue";
import DetailRound from "./components/Pages/Rounds/DetailRound.vue";
import ListJackpot from "./components/Pages/Jackpots/ListJackpot.vue";
import DetailJackpot from "./components/Pages/Jackpots/DetailJackpot.vue";
import ListTransaction from "./components/Pages/Transactions/ListTransaction.vue";
import DetailTransaction from "./components/Pages/Transactions/DetailTransaction.vue";
import Post from "./components/Post/ListPost.vue";
import AddPost from "./components/Post/AddPost.vue";

Vue.use(Router);

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/v1",
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
      path: "/post",
      name: "Post",
      component: Post,
    },
    {
      path: "/post/add",
      name: "Add Post",
      component: AddPost,
    },
    {
      path: "/round",
      name: "Round",
      component: ListRound,
    },
    {
      path: "/round/:id",
      name: "Round Detail",
      component: DetailRound,
    },
    {
      path: "/bet",
      name: "Bet",
      component: ListBet,
    },
    {
      path: "/bet/:id",
      name: "Bet Detail",
      component: DetailBet,
    },
    {
      path: "/jackpot",
      name: "Jackpot",
      component: ListJackpot,
    },
    {
      path: "/jackpot/:id",
      name: "Detail Jackpot",
      component: DetailJackpot,
    },
    {
      path: "/transaction",
      name: "Transaction",
      component: ListTransaction,
    },
    {
      path: "/transaction/:id",
      name: "Bet Transaction",
      component: DetailTransaction,
    }
  ]
});
router.beforeEach ((to, from, next) => {
  let token = localStorage.getItem('token') || '';
  if (token) {
    store.commit(CURRENT_ROUTE, to.path);
  } else {
    store.commit(CURRENT_ROUTE, '/');
  }
  next();
})
export default router;
