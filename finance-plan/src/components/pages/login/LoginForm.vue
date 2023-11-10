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
        Passwort oder Email sind falsch. Bitte versuch es nochmal.
      </p>
      <p v-if="loginData.showErrorConnection" :style="{ color: 'red' }">
        Leider ist bei uns etwas schief gegengen. Bitte versuch es nochmal.
      </p>
    </template>

    <template v-slot:buttonSubmit>
      <div id="btn">
        <SpinningLoader v-if="requestStatus == 'loading'"></SpinningLoader>
        <button v-else type="submit">Login</button>
      </div>
    </template>
  </base-form>
  <a href="#" @click="toggleRegisterStatus"
    >Noch nicht registriert? Dann gehts hier zur Anmeldung.</a
  >
</template>

<script>
import SpinningLoader from "@/components/base/SpinningLoader.vue";

export default {
  emits: ["toggle-register-status"],
  computed: {
    formData() {
      return this.$store.getters["registerModule/getFormData"];
    },
    loginData() {
      return this.$store.getters["registerModule/getLoginData"];
    },
    requestStatus() {
      return this.$store.getters["registerModule/getRequestStatus"];
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
  components: { SpinningLoader },
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

#btn {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
p {
  text-align: center;
}
</style>
