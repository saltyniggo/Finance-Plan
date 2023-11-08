<template>
  <base-card id="card">
    <div id="confirmationDialog">
      <h3>Sicher?</h3>
      <button id="confirmDelete">Ja</button>
      <button id="cancelDelete">Nein</button>
    </div>
  </base-card>
</template>

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
