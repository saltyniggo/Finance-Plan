<template>
  <div class="tableSum">
    <h2>"Account Name"</h2>
    <h2>Bilanz: {{ tableSum }}</h2>
  </div>
  <div class="tableSum">
    <h2>"Account Name"</h2>
    <h2>Bilanz: {{ tableSum }}</h2>
  </div>
  <div class="tableHead">
    <h3>Datum</h3>
    <h3>Betrag</h3>
    <h3>Bezeichnung</h3>
    <h3>Kategorie</h3>
    <div class="placeholder"></div>
  </div>
</template>

<script>
export default {
  props: ["data", "tableSum"],
};
</script>

<style scoped>
.tableHead,
.tableSum {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  background-color: #17253e;
  color: white;
  padding: 2vh;
}

.tableSum {
  border-top-left-radius: 4vh;
  border-top-right-radius: 4vh;
  border-image: linear-gradient(to right, #20639b, #05da93) 1;
  border-bottom: 2px solid;
}
.placeholder {
  width: 10%;
}

h3 {
  width: 22.5%;
  text-align: center;
}
</style>
