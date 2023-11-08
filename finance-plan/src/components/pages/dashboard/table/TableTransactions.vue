<template>
  <edit-modal></edit-modal>
  <div v-show="!transactionsEmpty" class="tableSec">
    <table-head
      :tableSum="$route.params.balance"
      :name="$route.params.name"
    ></table-head>
    <transition-group name="row" tag="ul">
      <table-row
        v-for="data in getTransactions.transactions"
        :key="data.transactionId"
        :data="data"
        :id="data.transactionId"
        class="rows"
      ></table-row>
    </transition-group>
  </div>
  <div v-show="transactionsEmpty" class="emptyListMessage">
    <h1>Bisher sind keine Transaktionen gespeichert!</h1>
    <h2>Füge jetzt deine erste Transaktion hinzu!</h2>
  </div>
</template>

<script>
import { mapActions } from "vuex";

import TableRow from "./TableRow.vue";
import TableHead from "./TableHead.vue";
import EditModal from "./edit/EditModal.vue";

export default {
  components: { TableRow, TableHead, EditModal },
  computed: {
    transactionsEmpty() {
      return this.$store.getters["transactionList/transactionsEmpty"];
    },
    getTransactions() {
      return this.$store.getters["transactionList/getTransactions"];
    },
  },
  methods: {
    ...mapActions("transactionList", ["checkTransactionList"]),
  },
  mounted() {
    this.checkTransactionList();
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
  box-shadow: 0vh 0vh 5vh #20639b, 0vh 0vh 2vh #05da93;
}

.emptyListMessage {
  margin-top: 12.5%;
  padding: 2.5%;
  text-align: center;
  color: #ffffff;
}

.rows {
  width: 100%;
  overflow: hidden;
  transition: all 0.4s;
}

.row-enter,
.row-leave-to {
  opacity: 0;
}

.row-enter {
  transform: translateY(30%);
}

.row-leave-to {
  transform: translateX(5%);
}

.row-leave-active {
  position: absolute;
}
</style>
