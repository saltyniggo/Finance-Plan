<template>
  <base-form @submitEvent="login">
    <template v-slot:title>Login</template>

    <template v-slot:default>
      <base-input v-model="formData.loginEmail" :field="'loginEmail'">
        <template v-slot:label>Email:</template>
      </base-input>
      <base-input
        v-model="formData.loginPassword"
        :inputType="'password'"
        :field="'loginPassword'"
      >
        <template v-slot:label>Passwort:</template>
      </base-input>

      <p v-if="loginData.showError" :style="{ color: 'red' }">
        Passwort oder Email sind falsch. Bitte versuch es nochmal
      </p>
    </template>

    <template v-slot:buttonSubmit> </template>
    <template v-slot:buttonText> Login</template>
  </base-form>
  <a href="#" @click="toggleRegisterStatus"
    >Noch nicht registriert? Dann gehts hier zur Anmeldung.</a
  >
</template>

<script>
export default {
  emits: ["toggle-register-status"],

  computed: {
    formData() {
      return this.$store.getters["registerModule/getFormData"];
    },
    loginData() {
      return this.$store.getters["registerModule/getLoginData"];
    },
  },
  methods: {
    toggleRegisterStatus() {
      this.$emit("toggle-register-status");
    },
    login() {
      this.$store.dispatch("registerModule/login");
    },
  },
};
</script>
