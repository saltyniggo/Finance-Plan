<template>
  <transition name="smoothBackdrop">
    <div
      v-if="backdropStatus"
      class="backdrop"
      @click="this.clickBackdrop()"
    ></div>
  </transition>
</template>

<script>
import { mapActions } from "vuex";

export default {
  methods: {
    ...mapActions("popupModule", ["clickBackdrop"]),
  },
  computed: {
    backdropStatus() {
      return this.$store.getters["popupModule/backdropStatus"];
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
