<template>
  <back-drop
    @backdropClicked="closeNav"
    :openBackdrop="openBackdrop"
  ></back-drop>

  <div class="menu-symbol" @mouseenter="openNav" @mouseleave="closeNav">
    <i class="fa-solid fa-plus"></i>

    <div>
      <div class="nav">
        <transition name="smoothOpening">
          <div v-if="openSide">
            <button-expense @click="$emit('addExpense')"></button-expense>
          </div>
        </transition>

        <transition name="smoothOpening">
          <div v-if="openSide">
            <button-income @click="$emit('addIncome')"></button-income>
          </div>
        </transition>

        <transition name="smoothOpening">
          <div v-if="openSide"><button-aim></button-aim></div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import ButtonExpense from "./ButtonExpense.vue";
import ButtonAim from "./ButtonAim.vue";
import ButtonIncome from "./ButtonIncome.vue";

export default {
  props: ["openModal"],
  emits: ["addExpense", "addIncome", "closeModal"],
  components: { ButtonExpense, ButtonAim, ButtonIncome },
  data() {
    return {
      openBackdrop: false,
      openSide: false,
      closeNavTimeout: null,
    };
  },

  methods: {
    openNav() {
      this.openSide = true;
      this.openBackdrop = true;
      clearTimeout(this.closeNavTimeout);
    },

    closeNav() {
      if (this.openSide === false) {
        this.openBackdrop = false;
        this.$emit("closeModal");
        return;
      }
      this.closeNavTimeout = setTimeout(() => {
        if (this.openModal === true) {
          this.openSide = false;
          return;
        }
        this.openSide = false;
        this.openBackdrop = false;
      }, 400);
    },
  },
};
</script>

<style scoped>
button {
  width: 100%;
  padding: 12px 12px;
}
.backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 0;
  background-color: rgba(0, 0, 0, 0.75);
}

i {
  background-color: #05da93;
  color: #fff;
  padding: 1%;
  position: fixed;
  bottom: 48%;
  right: 1%;
  border-radius: 50%;
  z-index: 3;
}

.nav {
  position: relative;
}

.nav div {
  transition: all 0.5s;
  position: fixed;

  text-decoration: none;
  display: block;
  text-align: center;
  color: #ecf0f3;

  width: 7rem;
  z-index: 2;
}

.nav :nth-child(1) {
  top: 35%;
  right: 5%;
}

.nav :nth-child(2) {
  top: 46.5%;
  right: 9%;
}

.nav :nth-child(3) {
  bottom: 35%;
  right: 5%;
}

.smoothOpening-enter-active {
  animation: smoothOpening 0.7s ease-out forwards;
}

.smoothOpening-leave-active {
  animation: smoothOpening 0.7s ease-in reverse forwards;
}

@keyframes smoothOpening {
  from {
    opacity: 0;
    transform: translateX(200px) scale(0.9);
  }

  to {
    opacity: 1;
    transform: translateX(0) scale(1);
  }
}

.smoothBackdrop-enter-active {
  animation: smoothBackdrop 0.7s ease-out forwards;
}

.smoothBackdrop-leave-active {
  animation: smoothBackdrop 0.7s ease-in reverse forwards;
}

@keyframes smoothBackdrop {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
