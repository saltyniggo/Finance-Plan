<template>
  <label><slot name="label"></slot></label>
  <input
    v-if="currentComponent == 'input'"
    :type="inputType"
    :value="inputValue"
    @input="updateInputValue"
    :required="required"
    :field="field"
  />
  <!--  <select v-if="select" v-model="selectvalue" @change="emitSelectValue">
    <slot v-if="select"></slot>
  </select> -->
</template>

<script>
import { mapActions } from "vuex";
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
    field: { type: String },
  },

  computed: {
    inputValue: {
      get() {
        return this.$store.getters["registerModule/inputValue"](this.field);
      },
      set(value) {
        this.$store.dispatch("registerModule/updateFormData", {
          field: this.field,
          value,
        });
      },
    },
  },

  methods: {
    ...mapActions("registerModule", [
      "updatePasswordAction",
      "updatePasswordRepeatAction",
    ]),

    updateInputValue(event) {
      this.inputValue = event.target.value;
      this.updatePasswordRepeatAction();
      this.updatePasswordAction();
    },
  },

  /*   data() {
    return {
      selectedValue: "option1",
    };
  },
  methods: {
    emitSelectValue() {
      this.$emit("select-change", this.selectedValue);
    },
  }, */
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
