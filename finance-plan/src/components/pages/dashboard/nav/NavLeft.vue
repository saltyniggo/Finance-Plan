<template>
  <div class="menu-symbol" @click="backToOverview">
    <i class="fa-solid fa-house"></i>
  </div>
</template>

<script>
import router from "@/router";

export default {
  data() {
    return {
      openBackdrop: false,
      openSide: false,
      closeNavTimeout: null,
    };
  },

  methods: {
    backToOverview() {
      router.push("/accounts");
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
</style>
