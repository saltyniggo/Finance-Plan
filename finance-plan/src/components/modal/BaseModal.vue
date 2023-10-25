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
      actionChosen: "income",
    };
  },
};
</script>

<style scoped>
#baseModal {
  z-index: 2;
  position: fixed;
  top: 0;
  min-width: 30%;
  min-height: 30%;
  background-color: #152032;
  color: #ecf0f3;
  border-radius: 5vh;
  box-shadow: 0vh 0vh 5vh #20639b, 0vh 0vh 2vh #05da93;
  margin: 14.5% 35%;
}
</style>
