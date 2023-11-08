import { createRouter, createWebHistory } from "vue-router";
import store from "./store/index.js";
import NotFound from "./components/pages/NotFound.vue";

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
      path: "/login",
      components: { header: TheHeader, content: LoginPage },
    },

    {
      name: "accounts",
      path: "/accounts",
      meta: { needsAuth: true },
      components: {
        header: TheHeader,
        content: AccountOverview,
      },
      beforeEnter: (_, /* _, */ next) => {
        // reicht ein platzhalter?
        const userId = store.getters["userModule/getUserId"];
        const response = store.dispatch("accountsModule/getAccounts", userId);
        if (response == "successful") {
          next(); // Fortsetzen, wenn die Daten verfügbar sind
        }
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
        modal: BaseModal,
        edit: EditModal,
      },
      beforeEnter: (to, from, next) => {
        const accountId = to.params.id;
        const response = store.dispatch(
          "transactionModule/getTransactions",
          accountId
        );
        if (response == "successful") {
          next(); // Fortsetzen, wenn die Daten verfügbar sind
        }
      },
    },
    {
      name: "notFound",
      path: "/:pathMatch(.*)*",
      components: { header: TheHeader, content: NotFound },
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
