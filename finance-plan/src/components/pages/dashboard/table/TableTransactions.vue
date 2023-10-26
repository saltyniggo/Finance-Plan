<template>
  <div class="tableSec">
    <table-head></table-head>
    <table-row v-for="data in dataSet" :key="data" :data="data"></table-row>
  </div>
</template>

<script>
import TableRow from "./TableRow.vue";
import TableHead from "./TableHead.vue";

export default {
  components: { TableRow, TableHead },
  data() {
    return {
      dataSet: [
        {
          date: "01.11.2003",
          amount: 120,
          description: "Fallschirm-Springen",
          category: "Freizeit",
        },
        {
          date: "29.07.2002",
          amount: 140,
          description: "Miete + Strom",
          category: "Miete",
        },
        {
          date: "16.12.1998",
          amount: 20,
          description: "Neues Katzenklo",
          category: "Katze",
        },
        {
          date: "16.12.1998",
          amount: 20,
          description: "Neues Katzenklo",
          category: "Katze",
        },
        {
          date: "16.12.1998",
          amount: 20,
          description: "Neues Katzenklo",
          category: "Katze",
        },
        {
          date: "16.12.1998",
          amount: 20,
          description: "Neues Katzenklo",
          category: "Katze",
        },
      ],
    };
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
