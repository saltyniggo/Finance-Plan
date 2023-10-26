<template>
  <base-form>
    <template v-slot:title>Login</template>
    <template v-slot:default>
      <label>Email:</label>
      <input type="text" />
      <label>Passwort:</label>
      <input type="text"
    /></template>

    <template v-slot:buttonSubmit>
      <button @submit.prevent>SUBMIT</button></template
    >
  </base-form>
  <a href="#" @click="toggleRegisterStatus"
    >Noch nicht registriert? Dann gehts hier zur Anmeldung.</a
  >
</template>

<script>
import BaseForm from "./BaseForm.vue";
export default {
  components: { BaseForm },
  methods: {
    toggleRegisterStatus() {
      this.$emit("toggle-register-status");
    },
  },
};
</script>
