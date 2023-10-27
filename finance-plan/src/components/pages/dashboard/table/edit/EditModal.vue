<template>
  <back-drop
    @backdropClicked="closeBackdrop"
    :openBackdrop="openBackdrop"
  ></back-drop>
  <transition name="modalPopup">
    <div v-if="openModal" id="baseModal"></div>
  </transition>
</template>

<script>
export default {
  props: ["openModal"],
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
  position: absolute;
  min-width: 30%;
  min-height: 30%;
  background-color: #152032;
  color: #ecf0f3;
  border-radius: 5vh;
  box-shadow: 0vh 0vh 5vh #20639b, 0vh 0vh 2vh #05da93;
  margin-left: 35%;
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
