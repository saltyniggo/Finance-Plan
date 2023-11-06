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
    </template>

    <template v-slot:buttonSubmit>
      <button type="submit">Registrieren</button>
    </template>
    <template v-slot:buttonText> Registrieren</template>
  </base-form>
  <a href="#" @click="toggleRegisterStatus"
    >Doch registriert? Dann gehts hier zum Login.</a
  >
</template>

<script>
export default {
  emits: ["toggle-register-status"],
  computed: {
    formData() {
      return this.$store.getters["registerModule/getFormData"];
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
</style>
