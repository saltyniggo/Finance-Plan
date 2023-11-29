<template>
  <base-card id="card">
    <div id="confirmationDialog">
      <h3>Sicher?</h3>
      <button id="confirmDelete" @click="deleteUser()">Ja</button>
      <button id="cancelDelete" @click="$emit('cancelDelete')">Nein</button>
    </div>
  </base-card>
</template>

<script>
export default {
  computed: {
    userId() {
      return this.$store.getters["userModule/getUserId"];
    },
  },
  methods: {
    async deleteUser() {
      this.$store.dispatch("userModule/deleteUser", this.userId);
    },
  },
};
</script>

<style scoped>
#card {
  margin-top: -1%;
}
div {
  display: flex;
  justify-content: center;
  align-items: center;
}

h3 {
  margin-right: 20%;
}

button {
  margin-right: 5%;
  width: 4rem;
  border-radius: 8px;
  padding: 1%;
}

#confirmDelete {
  background-color: #05da93;
}

#cancelDelete {
  background-color: rgb(217, 47, 5);
}
</style>
