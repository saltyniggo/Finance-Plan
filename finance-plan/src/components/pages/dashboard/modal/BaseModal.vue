<template>
  <back-drop
    @backdropClicked="closeBackdrop"
    :openBackdrop="openBackdrop"
  ></back-drop>
  <transition name="modalPopup">
    <div v-if="openModal" id="baseModal">
      <expense-menu v-if="chosenModal === 'expense'"></expense-menu>
      <income-menu v-else-if="chosenModal === 'income'"></income-menu>
    </div>
  </transition>
</template>

<script>
import ExpenseMenu from "./ExpenseMenu.vue";
import IncomeMenu from "./IncomeMenu.vue";

export default {
  props: ["chosenModal", "openModal"],
  components: { ExpenseMenu, IncomeMenu },
  data() {
    return {
      openBackdrop: false,
    };
  },
  methods: {
    closeBackdrop() {
      this.openBackdrop = false;
    },
  },
};
</script>

<style scoped>
#baseModal {
  z-index: 2;
  position: fixed;
  min-width: 30%;
  min-height: 30%;
  background-color: #152032;
  color: #ecf0f3;
  border-radius: 5vh;
  box-shadow: 0vh 0vh 5vh #20639b, 0vh 0vh 2vh #05da93;
  margin-left: 35%;
  margin-top: -3%;
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
    transform: translateY(225px) scale(0.8);
  }

  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}
</style>
