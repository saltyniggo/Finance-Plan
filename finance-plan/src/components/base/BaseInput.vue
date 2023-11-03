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
      "checkPassword",
      "checkPasswordRepeat",
      "checkLoginEmail",
      "checkLoginPassword",
    ]),

    updateInputValue(event) {
      this.inputValue = event.target.value;
      this.checkPasswordRepeat();
      this.checkPassword();
      this.checkLoginEmail();
      this.checkLoginPassword();
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
