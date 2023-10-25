<template>
  <transition name="smoothBackdrop">
    <div v-if="open" class="backdrop" @click="closeBackDrop"></div>
  </transition>
</template>

<script>
export default {
  props: { open },
  methods: {
    closeBackDrop() {
      this.$emit("backdropClicked");
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
