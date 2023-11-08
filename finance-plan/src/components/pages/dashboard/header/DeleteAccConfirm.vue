<template>
  <div id="confirmationDialog">
    <p>Sicher?</p>
    <button id="confirmDelete" @click="deleteUser()">Ja</button>
    <button id="cancelDelete" @click="$emit('cancelDelete')">Nein</button>
  </div>
</template>

<script>
export default {
  methods: {
    deleteUser() {
      this.$store.dispatch("userModule/deleteUser");
    },
  },
};
</script>

<style scoped>
div {
  display: flex;
  justify-content: center;
  align-items: center;
}

p {
  margin-right: 20%;
}

button {
  margin-right: 5%;
}
</style>
