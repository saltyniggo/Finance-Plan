<template>
  <the-header></the-header>
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
</template>

<script>
import TableTransactions from "./components/table/TableTransactions.vue";
import TheHeader from "./components/header/TheHeader.vue";
import NavLeft from "./components/nav/NavLeft.vue";
import BaseModal from "./components/modal/BaseModal.vue";
import NavRight from "./components/shortcuts/NavRight.vue";

export default {
  components: {
    TableTransactions,
    TheHeader,
    NavLeft,
    NavRight,
    BaseModal,
  },
  data() {
    return {
      openModal: false,
      chosenModal: false,
    };
  },
  methods: {
    openInputModal(value) {
      console.log(value);
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
