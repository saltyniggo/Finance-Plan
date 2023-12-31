import { createRouter, createWebHistory } from "vue-router";
import store from "./store/index.js";

import NotFoundLogin from "./components/pages/notFound/NotFoundLogin.vue";
import NotFoundAccounts from "./components/pages/notFound/NotFoundAccounts.vue";

import LoadingLogin from "./components/pages/loading/LoadingLogin.vue";
import LoadingAccounts from "./components/pages/loading/LoadingAccounts";

import TableTransactions from "./components/pages/dashboard/table/TableTransactions.vue";
import TheHeader from "./components/pages/dashboard/header/TheHeader.vue";
import NavLeft from "./components/pages/dashboard/nav/NavLeft.vue";
import BaseModal from "./components/pages/dashboard/modal/BaseModal.vue";
import NavRight from "./components/pages/dashboard/shortcuts/NavRight.vue";
import LoginPage from "./components/pages/login/LoginPage.vue";
import AccountOverview from "./components/pages/accounts/AccountOverview.vue";
import EditModal from "./components/pages/dashboard/table/edit/EditModal.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/login" },
    {
      name: "login",
      path: "/login",
      components: { header: TheHeader, content: LoginPage },
    },

    {
      path: "/logging",
      components: { header: TheHeader, content: LoadingLogin },
    },

    {
      name: "loading",
      path: "/loading",
      components: { header: TheHeader, content: LoadingAccounts },
    },

    {
      name: "accounts",
      path: "/accounts",
      meta: { needsAuth: true },
      components: {
        header: TheHeader,
        content: AccountOverview,
      },
    },
    {
      path: "/accounts/:name/:id/:accountBalance",
      name: "account",
      meta: { needsAuth: true },
      components: {
        header: TheHeader,
        rightNav: NavRight,
        leftNav: NavLeft,
        content: TableTransactions,
        modal: BaseModal,
        edit: EditModal,
      },
    },
    {
      name: "notFound",
      path: "/:pathMatch(.*)*",
      components: { header: TheHeader, content: NotFoundLogin },
    },

    {
      name: "notFoundAccount",
      path: "/problemWithConnection",
      components: { header: TheHeader, content: NotFoundAccounts },
    },
  ],
});

router.afterEach(function (to) {
  //runs after a navigatino has been confirmed
  if (to.meta.needsAuth) {
    let isAuth = store.getters["registerModule/getIsAuth"];
    if (isAuth === false) {
      router.push("/login");
    }
  }
  store.dispatch("popupModule/initBackdrop");
});

router.beforeEach(function () {});

export default router;
