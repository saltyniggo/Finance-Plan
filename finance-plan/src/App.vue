<template>
  <the-header></the-header>
  <base-modal></base-modal>
  <nav-left></nav-left>
  <nav-right></nav-right>
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
