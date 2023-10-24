<template>
  <div class="tableRow">
    <p>{{ data.date }}</p>
    <p>{{ data.amount }}€</p>
    <p>{{ data.description }}</p>
    <p>{{ data.category }}</p>
  </div>
</template>

<script>
export default {
  props: ["data"],
};
</script>

<style scoped>
.tableRow {
  display: flex;
  flex-direction: row;
  border: 1px solid black;
  padding: 1vh;
}

p {
  width: 25%;
  text-align: center;
}
</style>
