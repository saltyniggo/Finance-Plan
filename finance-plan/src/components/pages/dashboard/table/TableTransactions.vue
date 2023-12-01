<template>
  <div v-if="response">
    <edit-modal></edit-modal>
    <div
      v-show="!transactionsEmpty && (response === 200 || response === 404)"
      class="tableSec"
    >
      <table-head
        :tableSum="$route.params.accountBalance"
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
  </div>
  <div v-else-if="!response">
    <base-card>
      <h2>
        Oops, hier ist wohl etwas schief gegangen... 😭😨 <br />Hier kommst du
        zurück zur
        <router-link to="/accounts">Accountübersicht</router-link>
      </h2>
    </base-card>
  </div>
  <base-card v-else>
    <SpinningLoader></SpinningLoader>
    <h2>Kontodaten werden geladen</h2></base-card
  >
</template>

<script>
import { mapActions } from "vuex";

import TableRow from "./TableRow.vue";
import TableHead from "./TableHead.vue";
import EditModal from "./edit/EditModal.vue";
import SpinningLoader from "@/components/base/SpinningLoader.vue";

export default {
  components: { TableRow, TableHead, EditModal, SpinningLoader },
  data() {
    return {
      response: null,
      params: this.$route.params,
      name: this.$route.params.name,
      accountBalance: this.$route.params.accountBalance,
      id: this.$route.params.id,
    };
  },
  computed: {
    transactionsEmpty() {
      return this.$store.getters["transactionModule/transactionsEmpty"];
    },
    getTransactions() {
      return this.$store.getters["transactionModule/getTransactions"];
    },
  },
  methods: {
    ...mapActions("transactionModule", ["checktransactionModule"]),
  },

  async beforeMount() {
    this.response = null;
    const accountId = this.id;
    const response = await this.$store.dispatch(
      "transactionModule/getTransactions",
      accountId
    );
    if (response.status === 200 || response.status === 404) {
      this.response = response.status;
    }
  },

  mounted() {
    this.checktransactionModule();
  },
};
</script>

<style scoped>
h2 {
  color: #ffffff;
}
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
