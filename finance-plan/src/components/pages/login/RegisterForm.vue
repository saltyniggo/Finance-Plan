<template>
  <base-form @submitEvent="register">
    <template v-slot:title>Registrieren</template>
    <template v-slot:default>
      <base-input @input-change="(value) => handleFirstName(value)">
        <template v-slot:label>Vorname:</template></base-input
      >
      <base-input @input-change="handleLastName">
        <template v-slot:label>Nachname:</template></base-input
      >
      <base-input :inputType="'email'" @input-change="handleEmail">
        <template v-slot:label>Email:</template></base-input
      >

      <h4>Passwortanforderungen:</h4>
      <ul>
        <li :style="{ color: lengthCheck ? 'green' : 'red' }">8 Buchstaben</li>
        <li
          :style="{
            color: capitalCheck && lowerCheck && !justNumbers ? 'green' : 'red',
          }"
        >
          Groß- und Kleinschreibung
        </li>
        <li :style="{ color: numberCheck && signCheck ? 'green' : 'red' }">
          mindestens eine Zahl und ein Sonderzeichen
          (!@#$%^&*()_+\-=\[]{?};':"|,.&lt;&gt;)
        </li>
      </ul>

      <br />

      <base-input
        :requirementsTrue="requirementsTrue"
        @input-change="handlePassword"
      >
        <template v-slot:label>Passwort:</template></base-input
      >
      <base-input :rightTwice="rightTwice" @input-change="handlePasswordRepeat">
        <template v-slot:label>Passwort wiederholen:</template></base-input
      >
    </template>

    <template v-slot:buttonSubmit> </template>
    <template v-slot:buttonText> Registrieren</template>
  </base-form>
  <a href="#" @click="toggleRegisterStatus"
    >Doch registriert? Dann gehts hier zum Login.</a
  >
</template>

<script>
export default {
  data() {
    return {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      passwordRepeat: "",
      lengthCheck: false,
      numberCheck: false,
      capitalCheck: false,
      lowerCheck: false,
      signCheck: false,
      justNumbers: false,
    };
  },
  methods: {
    toggleRegisterStatus() {
      this.$emit("toggle-register-status");
    },

    register() {
      console.log("register");
    },
    handleFirstName(value) {
      this.firstName = value;
    },

    handleLastName(value) {
      this.lastName = value;
    },

    handleEmail(value) {
      this.email = value;
    },

    handlePassword(value) {
      this.password = value.trim();
      this.checkPassword();
    },

    handlePasswordRepeat(value) {
      this.passwordRepeat = value;
      this.doubleCheckPassword();
    },

    checkPassword() {
      const password = this.password;
      const lengthCheck = password.length >= 8;
      const numberCheck = /[0-9]/.test(password);
      const capitalCheck = /[A-Z]/.test(password);
      const lowerCheck = /[a-z]/.test(password);
      const signCheck = /[!@#$%^&*()_+\-={};':"|,.<>?]/.test(password);
      const justNumbers = /^[0-9]+$/.test(password);

      this.lengthCheck = lengthCheck;
      this.numberCheck = numberCheck;
      this.capitalCheck = capitalCheck;
      this.lowerCheck = lowerCheck;
      this.signCheck = signCheck;
      this.justNumbers = justNumbers;

      if (
        lengthCheck &&
        numberCheck &&
        capitalCheck &&
        lowerCheck &&
        signCheck &&
        !justNumbers
      ) {
        console.log("Saved");
        this.requirementsTrue = true;
      } else {
        console.log("Check Requirements");
        this.requirementsTrue = false;
      }
    },

    doubleCheckPassword() {
      if (this.password === this.passwordRepeat) {
        console.log("2x right");
        this.rightTwice = true;
      } else {
        console.log("nope");
        this.rightTwice = false;
      }
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
</style>
