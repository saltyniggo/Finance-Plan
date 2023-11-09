<template>
  <base-form @submitEvent="register">
    <template v-slot:title>Registrieren</template>
    <template v-slot:default>
      <base-input v-model="formData.firstName" :field="'firstName'">
        <template v-slot:label>Vorname:</template>
      </base-input>

      <base-input v-model="formData.lastName" :field="'lastName'">
        <template v-slot:label>Nachname:</template>
      </base-input>

      <base-input
        :inputType="'email'"
        v-model="formData.email"
        :field="'email'"
      >
        <template v-slot:label>Email:</template>
      </base-input>

      <h4>Passwortanforderungen:</h4>
      <ul>
        <li :style="{ color: formData.lengthCheck ? 'green' : 'red' }">
          8 Buchstaben
        </li>
        <li
          :style="{
            color:
              formData.capitalCheck &&
              formData.lowerCheck &&
              !formData.justNumbers
                ? 'green'
                : 'red',
          }"
        >
          Groß- und Kleinschreibung
        </li>
        <li
          :style="{
            color: formData.numberCheck && formData.signCheck ? 'green' : 'red',
          }"
        >
          mindestens eine Zahl und ein Sonderzeichen
          (!@#$%^&*()_+\-=\[]{?};':"|,.&lt;&gt;)
        </li>
      </ul>

      <br />

      <base-input
        :requirementsOk="formData.requirementsOk"
        :field="'password'"
        v-model="formData.password"
      >
        <template v-slot:label>Passwort:</template></base-input
      >
      <base-input
        :rightTwice="formData.rightTwice"
        :field="'passwordRepeat'"
        v-model="formData.passwordRepeat"
      >
        <template v-slot:label>Passwort wiederholen:</template></base-input
      >

      <p
        v-if="!formData.rightTwice"
        :style="{ fontSize: 'small', color: 'red' }"
      >
        Das Passwort ist nicht identisch mit dem zuvor erstellten
      </p>

      <p v-if="loginData.showErrorConnection" :style="{ color: 'red' }">
        Leider ist bei uns etwas schief gegengen. Bitte versuch es nochmal.
      </p>
    </template>

    <template v-slot:buttonSubmit>
      <div id="btn">
        <SpinningLoader v-if="requestStatus == 'loading'"></SpinningLoader>
        <button v-else type="submit">Registrieren</button>
      </div>
    </template>
  </base-form>
  <a href="#" @click="toggleRegisterStatus"
    >Doch registriert? Dann gehts hier zum Login.</a
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
    register() {
      this.$store.dispatch("registerModule/register");
    },
  },
  components: { SpinningLoader },
};
</script>

<style scoped>
a {
  color: #ecf0f3;
}

ul {
  position: relative;
  left: 2rem;
  font-size: small;
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
