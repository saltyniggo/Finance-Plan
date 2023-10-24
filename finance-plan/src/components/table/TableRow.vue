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
  border-top: 1px solid;
  /*   background-color: #17253e;
 */
  padding: 1vh;
}

p {
  width: 25%;
  text-align: center;
  color: #ecf0f3;
}
</style>
