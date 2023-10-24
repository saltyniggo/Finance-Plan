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
}
</style>
