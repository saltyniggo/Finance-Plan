<template>
  <back-drop></back-drop>
  <the-header :isAuth="isAuth"></the-header>
  <div v-if="isAuth">
    <base-modal :openModal="openModal" :chosenModal="chosenModal"></base-modal>
    <nav-left></nav-left>
    <nav-right></nav-right>
    <div class="content">
      <account-overview></account-overview>
      <table-transactions> </table-transactions>
    </div>
  </div>
  <div v-else>
    <login-page></login-page>
  </div>
</template>

<script>
import TableTransactions from "./components/pages/dashboard/table/TableTransactions.vue";
import TheHeader from "./components/pages/dashboard/header/TheHeader.vue";
import NavLeft from "./components/pages/dashboard/nav/NavLeft.vue";
import BaseModal from "./components/pages/dashboard/modal/BaseModal.vue";
import NavRight from "./components/pages/dashboard/shortcuts/NavRight.vue";
import LoginPage from "./components/pages/login/LoginPage.vue";
import AccountOverview from "./components/pages/accounts/AccountOverview.vue";
import BackDrop from "./components/base/BackDrop.vue";

export default {
  components: {
    TableTransactions,
    TheHeader,
    NavLeft,
    NavRight,
    BaseModal,
    LoginPage,
    AccountOverview,
    BackDrop,
  },
  computed: {
    isAuth() {
      return this.$store.state.registerModule.isAuth;
    },
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  background-color: #152032;
  overflow-x: hidden;
}

p {
  color: #ecf0f3;
}
</style>
