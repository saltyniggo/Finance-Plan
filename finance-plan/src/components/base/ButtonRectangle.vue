<template>
  <button
    :style="{ color: btnColor, background: bg }"
    @click="$emit('clickEvent')"
  >
    <slot><i class="fa-solid fa-plus"></i></slot>
  </button>
</template>

<script>
export default {
  props: {
    btnColor: String,
    bg: String,
  },
};
</script>

<style scoped>
button {
  border-radius: 2vh;
  margin: 1%;
  cursor: pointer;
}
</style>
