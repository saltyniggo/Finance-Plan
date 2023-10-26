<template>
  <the-header :isAuth="isAuth"></the-header>

  <div v-if="isAuth">
    <base-modal :openModal="openModal" :chosenModal="chosenModal"></base-modal>
    <nav-left></nav-left>
    <nav-right
      @addExpense="openInputModal('expense')"
      @addIncome="openInputModal('income')"
      @closeModal="
        {
          this.openModal = false;
        }
      "
      :openModal="openModal"
    ></nav-right>
    <div class="content">
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

export default {
  components: {
    TableTransactions,
    TheHeader,
    NavLeft,
    NavRight,
    BaseModal,
    LoginPage,
  },

  data() {
    return {
      isAuth: false,
      openModal: false,
      chosenModal: false,
    };
  },
  methods: {
    openInputModal(value) {
      this.openModal = true;
      this.chosenModal = value;
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
}

p {
  color: #ecf0f3;
}
</style>
