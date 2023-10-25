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
    <base-card><login-form></login-form></base-card>
  </div>
</template>

<script>
import TableTransactions from "./components/table/TableTransactions.vue";
import TheHeader from "./components/header/TheHeader.vue";
import NavLeft from "./components/nav/NavLeft.vue";
import BaseModal from "./components/modal/BaseModal.vue";
import NavRight from "./components/shortcuts/NavRight.vue";
import BaseCard from "./components/login/BaseCard.vue";
import LoginForm from "./components/login/LoginForm.vue";

export default {
  components: {
    TableTransactions,
    TheHeader,
    NavLeft,
    NavRight,
    BaseModal,
    BaseCard,
    LoginForm,
  },

  data() {
    return {
      isAuth: true,
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
