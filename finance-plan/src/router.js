import { createRouter, createWebHistory } from "vue-router";
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
      // children: [
      //   {
      //     //   name: ":accounts.name",
      //     //   path: ":accounts.name + accounts.id",
      //     path: "/transaction",
      //     component: { content: TableTransactions },
      //     props: true,
      //   },
      // ],
    },
    {
      //   name: ":accounts.name",
      //   path: ":accounts.name + accounts.id",
      name: "transaction",
      path: "/transaction",
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
      components: NotFound,
    },
  ],
  //   linkActiveClass: "active",
  //   scrollBehavior(_, _2, savedPosition) {
  //     // console.log(to);
  //     // console.log(from);
  //     // console.log(savedPosition);
  //     if (savedPosition) {
  //       return savedPosition;
  //     }
  //     return { left: 0, top: 0 }; // jump to top uof page
  //   },
});
// router.beforeEach(function (to, from, next) {
//   console.log("Global beforeEach");
//   console.log(to, from);
//   // if (to.name === 'team-members') {
//   //   next();
//   // } else {
//   //   next({ name: 'team-members', params: { teamId: 't2' } });
//   // }
//   next();
// });

// router.afterEach(function (to, from) {
//   //runs after a navigatino has been confirmed
//   //e.g sending analytics data
//   console.log("global after each");
//   console.log(to, from);

//   if (to.meta.needsAuth) {
//     console.log("need authentification");
//   }
// });

export default router;
