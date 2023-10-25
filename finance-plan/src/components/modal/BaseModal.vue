<template>
  <div id="baseModal">
    <base-menu v-if="!actionChosen"></base-menu>
    <expense-menu v-else-if="actionChosen === 'expense'"></expense-menu>
    <income-menu v-else-if="actionChosen === 'income'"></income-menu>
  </div>
</template>

<script>
import BaseMenu from "./BaseMenu.vue";
import ExpenseMenu from "./ExpenseMenu.vue";
import IncomeMenu from "./IncomeMenu.vue";

export default {
  components: { BaseMenu, ExpenseMenu, IncomeMenu },
  data() {
    return {
      actionChosen: false,
    };
  },
};
</script>

<style scoped>
#baseModal {
  position: fixed;
  top: 0;
  width: 30%;
  height: 30%;
  background-color: grey;
  margin: 20% 35%;
}
</style>
