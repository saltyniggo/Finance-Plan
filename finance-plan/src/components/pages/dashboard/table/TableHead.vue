<template>
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
  props: ["data"],
};
</script>

<style scoped>
.tableHead {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  background-color: #17253e;
  border-top-left-radius: 4vh;
  border-top-right-radius: 4vh;
  color: white;
  padding: 2vh;
}

.placeholder {
  width: 10%;
}

h3 {
  width: 22.5%;
  text-align: center;
}
</style>
