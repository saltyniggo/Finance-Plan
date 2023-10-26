<template>
  <div class="tableRow">
    <p>{{ data.date }}</p>
    <p>{{ data.amount }}€</p>
    <p>{{ data.description }}</p>
    <p>{{ data.category }}</p>
    <div class="buttonList">
      <button-round><i class="fa-solid fa-pen"></i></button-round>
      <button-round><i class="fa-solid fa-trash"></i></button-round>
    </div>
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

.buttonList {
  width: 10%;
  display: flex;
  justify-content: space-around;
}

p {
  padding-top: 5px;
  width: 22.5%;
  text-align: center;
  color: #ecf0f3;
  font-size: 2vh;
  font-weight: 500;
  text-shadow: 2px 2px 3px #152032;
}
</style>
