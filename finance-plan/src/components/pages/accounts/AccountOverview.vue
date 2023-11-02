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
    <button class="addBtn" style="backgroundcolor: #17253e">
      + Account hinzufügen
    </button>
  </base-card>
</template>

<script>
export default {
  data() {
    return {
      accounts: [
        {
          name: "Sparkasse",
          balance: 70,
          id: 1,
        },
        {
          name: "Volksbank",
          balance: -70,
          id: 2,
        },
        {
          name: "Commerz",
          balance: 700,
          id: 3,
        },
      ],
    };
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
  background: linear-gradient(135deg, #20639b, #05da93);
  color: #ecf0f3;
  font-weight: 500;
  font-size: 2vh;
  text-shadow: 2px 2px 3px #1512032;
}

.editBtn {
  width: 5%;
  padding: 2%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
  border-radius: 20px;
  background: #05da93;
  color: #ecf0f3;
  font-weight: 500;
  font-size: 2vh;
  text-shadow: 2px 2px 3px #1512032;
  margin-left: 1%;
}
</style>
