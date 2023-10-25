<template>
  <!-- Backdrop -->

  <div v-if="open" class="backdrop" @click="closeNav"></div>

  <div class="menu-symbol" @mouseenter="openNav" @mouseleave="closeNav">
    <i class="fa-solid fa-bars"> </i>

    <div>
      <div class="nav">
        <transition name="smoothOpening">
          <a v-if="open" href="#">Übersicht</a>
        </transition>

        <transition name="smoothOpening">
          <a v-if="open" href="#">Einnahmen</a>
        </transition>

        <transition name="smoothOpening">
          <a v-if="open" href="#">Schulden</a>
        </transition>

        <transition name="smoothOpening">
          <a v-if="open" href="#">Ziele</a>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      open: false,
      closeNavTimeout: null,
    };
  },

  methods: {
    openNav() {
      this.open = true;
      clearTimeout(this.closeNavTimeout);
    },

    closeNav() {
      this.closeNavTimeout = setTimeout(() => {
        this.open = false;
      }, 500);
    },
  },
};
</script>

<style scoped>
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
  left: 1%;
  border-radius: 50%;
  z-index: 3;
}

.nav {
  position: relative;
}

.nav a {
  transition: all 0.5s;
  position: fixed;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  text-align: center;
  color: #ecf0f3;
  background-color: #20639b;
  width: 7rem;
  z-index: 2;
}

.nav :nth-child(1) {
  top: 35%;
  left: 5%;
}

.nav :nth-child(2) {
  top: 43%;
  left: 9%;
}

.nav :nth-child(3) {
  bottom: 43%;
  left: 9%;
}

.nav :nth-child(4) {
  bottom: 35%;
  left: 5%;
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
