<template>
  <base-form @submitEvent="login">
    <template v-slot:title>Login</template>
    <template v-slot:default>
      <base-input> <template v-slot:label>Email</template></base-input>
      <base-input> <template v-slot:label>Passwort</template></base-input>
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
  methods: {
    toggleRegisterStatus() {
      this.$emit("toggle-register-status");
    },
    login() {
      console.log("login");
    },
  },
};
</script>
