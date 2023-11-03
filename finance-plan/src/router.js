import { createRouter, createWebHistory } from "vue-router";
import store from "./store/index.js";
import NotFound from "./components/pages/NotFound.vue";

//import vueComponetent here

import TableTransactions from "./components/pages/dashboard/table/TableTransactions.vue";
import TheHeader from "./components/pages/dashboard/header/TheHeader.vue";
import NavLeft from "./components/pages/dashboard/nav/NavLeft.vue";
// import BaseModal from "./components/pages/dashboard/modal/BaseModal.vue";
import NavRight from "./components/pages/dashboard/shortcuts/NavRight.vue";
import LoginPage from "./components/pages/login/LoginPage.vue";
import AccountOverview from "./components/pages/accounts/AccountOverview.vue";

//import transactions from "./store/modules/transactions";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/login" },
    {
      path: "/login",
      components: { header: TheHeader, content: LoginPage },
      beforeEnter(to, from, next) {
        console.log("users beforeEnter");
        console.log(to, from);
        next();
      },
    },
    // {
    //   path: "/register",
    //   components: {  },
    //   beforeEnter(to, from, next) {
    //     console.log("users beforeEnter");
    //     console.log(to, from);
    //     next();
    //   },
    // },
    {
      name: "accounts",
      path: "/accounts",
      meta: { needsAuth: true },
      components: {
        header: TheHeader,
        rightNav: NavRight,
        leftNav: NavLeft,
        content: AccountOverview,
      },
    },
    {
      path: "/accounts/:name",
      name: "account",
      meta: { needsAuth: true },
      components: {
        header: TheHeader,
        rightNav: NavRight,
        leftNav: NavLeft,
        content: TableTransactions,
      },
    },

    {
      name: "notFound",
      path: "/:pathMatch(.*)*",
      components: { header: TheHeader, content: NotFound },
    },
  ],
});

router.afterEach(function (to, from) {
  console.log(to, from);
  //runs after a navigatino has been confirmed
  if (to.meta.needsAuth) {
    console.log("need authentification");

    let isAuth = store.getters["registerModule/getIsAuth"];
    console.log(isAuth);

    if (isAuth === true) {
      console.log(isAuth);
    } else {
      console.log("no Auth");
      router.push("/login");
    }
  }
});

export default router;
