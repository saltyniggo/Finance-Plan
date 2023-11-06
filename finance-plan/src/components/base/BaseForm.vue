<template>
  <h1>
    <slot name="title"></slot>
  </h1>
  <form @submit.prevent="onSubmit">
    <slot>Default</slot>

    <slot name="buttonSubmit">
      <button-rectangle @click="$emit('submitEvent')"
        ><slot name="buttonText">Submit</slot></button-rectangle
      ></slot
    >
  </form>
</template>

<script>
export default {
  emits: ["submitEvent"],
  methods: {
    onSubmit() {
      this.$emit("submitEvent");
    },
  },
};
</script>

<style scoped>
/* Add your component's specific styles here */
* {
  color: #ecf0f3;
}

h1 {
  text-align: center;
}

button {
  width: 22%;
  padding: 2%;
  margin: 2% 39%;
  background: linear-gradient(135deg, #20639b, #05da93);
  color: #ffffff;
  font-size: 1vw;
  font-weight: 600;
  border-radius: 2vh;
}

form {
  display: flex;
  flex-direction: column;
  width: 80%;
}
</style>
