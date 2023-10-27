<template>
  <transition name="fadeIn">
    <div class="tableRow" v-if="data">
      <p>{{ data.date }}</p>
      <p>{{ data.amount }}€</p>
      <p>{{ data.description }}</p>
      <p>{{ data.category }}</p>
      <div class="buttonList">
        <button-round @click="openEditModal(index)"
          ><i class="fa-solid fa-pen"></i
        ></button-round>
        <button-round @click="deleteTransaction(index)"
          ><i class="fa-solid fa-trash"></i
        ></button-round>
      </div>
    </div>
  </transition>
</template>

<script>
import { mapActions } from "vuex";

export default {
  props: ["data", "index"],
  methods: {
    ...mapActions("transactionList", ["deleteTransaction", "openEditModal"]),
  },
};
</script>

<style scoped>
.tableRow {
  display: flex;
  flex-direction: row;
  border-top: 1px solid;
  padding: 1vh;
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.fade-enter-active {
  animation: fadeIn 0.5s ease-out;
}

.fade-leave-active {
  animation: fadeIn 0.5s ease-in reverse;
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
