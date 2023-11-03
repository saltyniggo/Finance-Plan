<template>
  <div class="menu-symbol" @mouseenter="openNav" @mouseleave="closeNav">
    <i class="fa-solid fa-bars"> </i>

    <div>
      <div class="nav">
        <transition name="smoothOpening">
          <a v-if="openSide" href="#">Übersicht</a>
        </transition>

        <transition name="smoothOpening">
          <a v-if="openSide" href="#">Einnahmen</a>
        </transition>

        <transition name="smoothOpening">
          <a v-if="openSide" href="#">Schulden</a>
        </transition>

        <transition name="smoothOpening">
          <a v-if="openSide" href="#">Ziele</a>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
export default {
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
      this.closeNavTimeout = setTimeout(() => {
        this.openSide = false;
        this.openBackdrop = false;
      }, 500);
    },
  },
};
</script>

<style scoped>
i {
  background-color: #05da93;
  color: #fff;
  padding: 1%;
  position: fixed;
  bottom: 48%;
  left: 1%;
  border-radius: 50%;
  z-index: 3;
}

.nav {
  position: relative;
  position: relative;
}

.nav a {
  transition: all 0.5s;
  position: fixed;
  transition: all 0.5s;
  position: fixed;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  text-align: center;
  color: #ecf0f3;
  border-radius: 2vh;
  border: 2px solid;
  border-color: grey black black gray;
  cursor: pointer;

  width: 7rem;
  z-index: 2;
}

.nav :nth-child(1) {
  top: 35%;
  left: 5%;
  background: linear-gradient(45deg, #05da93, #20639b);
}
.nav :nth-child(2) {
  top: 43%;
  left: 9%;
  background: linear-gradient(90deg, #05da93, #20639b);
}
.nav :nth-child(3) {
  bottom: 43%;
  left: 9%;
  background: linear-gradient(90deg, #05da93, #20639b);
}
.nav :nth-child(4) {
  bottom: 35%;
  left: 5%;
  background: linear-gradient(135deg, #05da93, #20639b);
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
    transform: translateX(-200px) scale(0.9);
  }

  to {
    opacity: 1;
    transform: translateX(0) scale(1);
  }
}
</style>
