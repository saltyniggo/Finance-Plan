<template>
  <h1>Einkommen eintragen:</h1>
  <form @submit.prevent="onSubmit" class="inputArea">
    <label>Wie viel?</label>
    <input type="number" min="0.00" step="1" placeholder="00.00" />
    <label>Woher?</label>
    <input type="text" />
    <label>An welchem Tag?</label>
    <input type="date" />
    <label>Kategorie</label>
    <select>
      <option value="">---</option>
      <option value="">Haushalt</option>
      <option value="">Essen</option>
      <option value="">Freizeit</option>
      <option value="">Auto</option>
      <option value="">Hund</option>
      <option value="">Katze</option>
      <option value="">Maus</option>
    </select>
    <button>SUBMIT</button>
  </form>
</template>

<style scoped>
.inputArea {
  padding: 2.5%;
  display: flex;
  flex-direction: column;
}

h1 {
  padding: 2%;
  text-align: center;
}

label {
  font-size: 2vh;
  margin-left: 10%;
  margin-bottom: 1vh;
}

input,
select {
  background-color: #17253e;
  color: #ffffff;
  border: none;
  width: 80%;
  height: 2.5vh;
  margin-left: 10%;
  margin-bottom: 4%;
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
