<template>
  <label><slot name="label"></slot></label>
  <input
    v-if="currentComponent == 'input'"
    :type="inputType"
    v-model="inputValue"
    @input="emitInputValue"
    :required="required"
  />
  <select v-if="select" v-model="selectvalue" @change="emitSelectValue">
    <slot v-if="select"></slot>
  </select>
</template>

<script>
export default {
  emits: ["input-change"],
  props: {
    inputType: {
      type: String,
      default: "text",
    },
    currentComponent: {
      type: String,
      default: "input",
    },
    required: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      inputValue: "",
      selectedValue: "option1",
    };
  },
  methods: {
    emitInputValue() {
      console.log("emit");
      console.log(this.inputType);
      this.$emit("input-change", this.inputValue);
    },
    emitSelectValue() {
      this.$emit("select-change", this.selectedValue);
    },
  },
};
</script>

<style scoped>
* {
  color: #ecf0f3;
}
label {
  font-size: 2vh;

  margin-bottom: 1vh;
}

input,
select {
  background-color: #17253e;
  color: #ffffff;
  border: none;

  height: 2.5vh;

  margin-bottom: 4%;
}
</style>
