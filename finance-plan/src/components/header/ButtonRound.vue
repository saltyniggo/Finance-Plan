<template>
  <button :style="{ color: btnColor }">
    <slot> <i class="fa-regular fa-hand-pointer"></i> </slot>
  </button>
</template>

<script>
export default {
  props: {
    btnColor: String,
  },
};
</script>

<style>
button {
  background-color: transparent;
  height: 2rem;
  width: 2rem;
  border-radius: 50%;
  margin: 1%;
  cursor: pointer;
}
</style>
