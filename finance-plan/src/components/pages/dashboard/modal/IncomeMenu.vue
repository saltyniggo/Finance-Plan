<template>
  <h1>Einkommen eintragen:</h1>
  <form @submit.prevent="onSubmit" class="inputArea" name="incomeForm">
    <label>Wie viel?</label>
    <input
      type="number"
      min="0.00"
      step="0.01"
      placeholder="00.00"
      v-model="amount"
    />
    <label>Woher?</label>
    <input type="text" v-model="description" />
    <label>An welchem Tag?</label>
    <input type="date" v-model="date" />
    <label>Kategorie</label>
    <select v-model="category">
      <option value="">---</option>
      <option value="Haushalt">Haushalt</option>
      <option value="Essen">Essen</option>
      <option value="Freizeit">Freizeit</option>
      <option value="Auto">Auto</option>
      <option value="Hund">Hund</option>
      <option value="Katze">Katze</option>
      <option value="Maus">Maus</option>
    </select>
    <button @submit.prevent @click="submitIncome">SUBMIT</button>
  </form>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      amount: null,
      description: null,
      date: null,
      category: null,
    };
  },
  methods: {
    submitIncome() {
      console.log(this.amount, this.description, this.date, this.category);
      this.addTransaction({
        date: this.date,
        amount: this.amount,
        description: this.description,
        category: this.category,
      });
    },
    ...mapActions("transactionList", ["addTransaction"]),
  },
};
</script>

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
