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

    <template v-slot:buttonSubmit>
      <button type="submit">Login</button>
    </template>
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

<style scoped>
a {
  color: #ecf0f3;
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
</style>
