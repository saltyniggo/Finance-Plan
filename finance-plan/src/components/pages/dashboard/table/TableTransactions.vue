<template>
  <div class="tableSec">
    <table-head></table-head>
    <table-row
      v-for="data in getTransactions"
      :key="data"
      :data="data"
    ></table-row>
  </div>
</template>

<script>
import TableRow from "./TableRow.vue";
import TableHead from "./TableHead.vue";

export default {
  components: { TableRow, TableHead },
  computed: {
    getTransactions() {
      return this.$store.getters["transactionList/getTransactions"];
    },
  },
};
</script>

<style scoped>
.tableSec {
  width: 80%;
  margin: 10%;
  background: linear-gradient(135deg, #20639b, #05da93);
  border-top-left-radius: 5vh;
  border-top-right-radius: 5vh;
  border-bottom-left-radius: 4vh;
  border-bottom-right-radius: 4vh;
  /*   border: #152032 2px solid;
 */
  box-shadow: 0vh 0vh 5vh #20639b, 0vh 0vh 2vh #05da93;
}
</style>
