<template>
  <div
    v-if="open"
    class="backdrop"
    @click="closeNav"
    @mouseover="closeNav"
  ></div>
  <div class="menu-symbol" @mouseover="openNav" @mouseleave="closeNav">
    <i class="fa-solid fa-bars"> </i>
    <div class="nav">
      <a href="#">Übersicht</a>
      <a href="#">Einnahmen</a>
      <a href="#">Schulden</a>
      <a href="#">Ziele</a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      open: false,
    };
  },
  methods: {
    openNav() {
      this.open = true;
      console.log("hover");
    },

    closeNav() {
      this.open = false;
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
}

.nav {
  opacity: 0;
  visibility: hidden;
  transition: 0.5s;
  z-index: 10;
}

.nav a {
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  text-align: center;
  color: #ecf0f3;
  background-color: #20639b;
  width: 7rem;
}

.nav :nth-child(1) {
  position: absolute;
  top: 35%;
  left: 5%;
}

.nav :nth-child(2) {
  position: absolute;
  top: 43%;
  left: 9%;
}

.nav :nth-child(3) {
  position: absolute;
  bottom: 43%;
  left: 9%;
}

.nav :nth-child(4) {
  position: absolute;
  bottom: 35%;
  left: 5%;
}

.menu-symbol:hover .nav {
  opacity: 1;
  visibility: visible;
}

.menu-symbol:hover i {
  background-color: white;
  color: #05da93;
}
</style>
