<template>
  <back-drop @backdropClicked="closeModal" :open="open"></back-drop>
  <transition name="modalPopup">
    <div v-if="open" id="baseModal">
      <base-menu v-if="!actionChosen"></base-menu>
      <expense-menu v-else-if="actionChosen === 'expense'"></expense-menu>
      <income-menu v-else-if="actionChosen === 'income'"></income-menu>
    </div>
  </transition>
</template>

<script>
import BaseMenu from "./BaseMenu.vue";
import ExpenseMenu from "./ExpenseMenu.vue";
import IncomeMenu from "./IncomeMenu.vue";
import BackDrop from "../BackDrop.vue";

export default {
  components: { BaseMenu, ExpenseMenu, IncomeMenu, BackDrop },
  data() {
    return {
      open: true,
      actionChosen: "income",
    };
  },
  methods: {
    closeModal() {
      this.open = false;
    },
  },
};
</script>

<style scoped>
#baseModal {
  z-index: 2;
  position: absolute;
  min-width: 30%;
  min-height: 30%;
  background-color: #152032;
  color: #ecf0f3;
  border-radius: 5vh;
  box-shadow: 0vh 0vh 5vh #20639b, 0vh 0vh 2vh #05da93;
  margin: 7.5% 35%;
}

.modalPopup-enter-active {
  animation: modalPopup 0.7s ease-out forwards;
}

.modalPopup-leave-active {
  animation: modalPopup 0.7s ease-in reverse forwards;
}

@keyframes modalPopup {
  from {
    opacity: 0;
    transform: translateY(400px) scale(0.8);
  }

  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}
</style>
