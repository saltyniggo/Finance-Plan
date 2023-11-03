<template>
  <base-card>
    <h2>Accounts</h2>
    <div v-for="account in accounts" :key="account.id" class="row">
      <button class="navBtn">
        <span>{{ account.name }}</span
        ><span>{{ account.balance }}</span>
      </button>
      <button class="editBtn"><i class="fa-solid fa-pen"></i></button>
      <button class="editBtn"><i class="fa-solid fa-trash"></i></button>
    </div>
    <button class="addBtn">+ Account hinzufügen</button>
  </base-card>
</template>

<script>
export default {
  computed: {
    accounts() {
      return this.$store.getters["accountsModule/getAccounts"];
    },
  },
};
</script>
<style scoped>
h2 {
  color: #ecf0f3;
}
.row {
  width: 90%;
  display: inline-flex;
}

.navBtn {
  width: 90%;
  padding: 2%;
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
  border-radius: 20px;
  background: #20639b;
  /* background: linear-gradient(135deg, #20639b, #05da93); */
  color: #ecf0f3;
  font-weight: 500;
  font-size: 2vh;
  text-shadow: 2px 2px 3px #151232;
}

.editBtn {
  width: 5%;
  padding: 2%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
  border-radius: 20px;
  background: #20639b;
  color: #ecf0f3;
  font-weight: 500;
  font-size: 2vh;
  text-shadow: 2px 2px 3px #151232;
  margin-left: 1%;
}

.addBtn {
  width: 90%;
  padding: 2%;
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
  border-radius: 20px;
  background: #17253e;
  color: #ecf0f3;
  font-weight: 500;
  font-size: 2vh;
  text-shadow: 2px 2px 3px #151232;
}
</style>
