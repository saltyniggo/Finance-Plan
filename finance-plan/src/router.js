import { createRouter, createWebHistory } from "vue-router";
import NotFound from "./components/pages/NotFound.vue";

//import vueComponetent here

import TableTransactions from "./components/pages/dashboard/table/TableTransactions.vue";
import TheHeader from "./components/pages/dashboard/header/TheHeader.vue";
import NavLeft from "./components/pages/dashboard/nav/NavLeft.vue";
import BaseModal from "./components/pages/dashboard/modal/BaseModal.vue";
import NavRight from "./components/pages/dashboard/shortcuts/NavRight.vue";
import LoginPage from "./components/pages/login/LoginPage.vue";
import AccountOverview from "./components/pages/accounts/AccountOverview.vue";

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

    {
      name: "accounts",
      path: "/accounts",
      meta: { needsAuth: true },
      components: {
        header: TheHeader,

        leftNav: NavLeft,
        content: AccountOverview,
      },
    },
    {
      path: "/account/:name",
      name: "account",
      components: {
        header: TheHeader,
        rightNav: NavRight,
        leftNav: NavLeft,
        content: TableTransactions,
        modal: BaseModal,
      },
    },
    {
      name: "notFound",
      path: "/:pathMatch(.*)*",
      components: { header: TheHeader, content: NotFound },
    },
  ],
});

export default router;
