<template>
  <base-form>
    <template v-slot:title>Registrieren</template>
    <template v-slot:default>
      <label>Vorname</label>
      <input type="text" />
      <label>Nachname</label>
      <input type="text" />
      <label>Email:</label>
      <input type="text" />
      <label>Passwort:</label>
      <input type="text" />
    </template>
    <template v-slot:buttonSubmit>
      <button @submit.prevent>SUBMIT</button>
    </template>
  </base-form>
  <a href="#" @click="toggleRegisterStatus"
    >Doch registriert? Dann gehts hier zum Login.</a
  >
</template>

<script>
export default {
  methods: {
    toggleRegisterStatus() {
      this.$emit("toggle-register-status");
    },
  },
};
</script>
