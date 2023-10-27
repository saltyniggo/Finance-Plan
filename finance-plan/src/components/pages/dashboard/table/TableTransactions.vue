<template>
  <edit-modal></edit-modal>
  <div class="tableSec">
    <table-head></table-head>
    <transition-group name="fade" tag="ul">
      <table-row
        v-for="(data, index) in getTransactions"
        :key="data"
        :data="data"
        :index="index"
      ></table-row>
    </transition-group>
  </div>
</template>

<script>
import TableRow from "./TableRow.vue";
import TableHead from "./TableHead.vue";
import EditModal from "./edit/EditModal.vue";

export default {
  components: { TableRow, TableHead, EditModal },
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
  box-shadow: 0vh 0vh 5vh #20639b, 0vh 0vh 2vh #05da93;
}

.fade-enter-from {
  opacity: 0;
  transform: translateX(-30px);
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s ease-in;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

.fade-leave-from {
  position: absolute;
  opacity: 1;
  transform: translateX(0);
}

.fade-move {
  transition: transform 0.5s ease;
}
</style>
