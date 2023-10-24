<template>
  <div class="tableHead">
    <h3>Datum</h3>
    <h3>Betrag</h3>
    <h3>Bezeichnung</h3>
    <h3>Kategorie</h3>
  </div>
</template>

<script>
export default {
  props: ["data"],
};
</script>

<style scoped>
.tableHead {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  background-color: black;
  color: white;
  padding: 2vh;
}

h3 {
  width: 25%;
  text-align: center;
}
</style>
