<template>
  <base-card>
    <h2>Accounts</h2>
    <section v-for="account in accounts" :key="account.id" class="row">
      <account-row :account="account"></account-row>
      <modify-account-button :account="account"></modify-account-button>
    </section>
    <add-account-input></add-account-input>
  </base-card>
</template>

<script>
import { mapActions } from "vuex";
import AddAccountInput from "./AddAccountInput.vue";
import ModifyAccountButton from "./ModifyAccountButton.vue";
import AccountRow from "./AccountRow.vue";

export default {
  components: { AddAccountInput, ModifyAccountButton, AccountRow },
  computed: {
    accounts() {
      return this.$store.getters["accountsModule/getAccounts"];
    },
  },

  methods: {
    ...mapActions("accountsModule", ["deleteAccount", "editAccount"]),
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
  height: 7vh;
  padding: 2%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;
  border-radius: 20px;
  background: #20639b;
  color: #ecf0f3;
  font-weight: 500;
  font-size: 2vh;
  text-shadow: 2px 2px 3px #151232;
  border-style: solid;
  border-width: 2px;
  border-color: rgb(92, 92, 92) black black rgb(92, 92, 92);
}

.editInput {
  width: 90%;
  height: 7vh;
  padding: 2%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;
  border-radius: 20px;
  background: #05da93;
  color: #ecf0f3;
  font-weight: 500;
  font-size: 2vh;
  text-shadow: 2px 2px 3px #151232;
  border-style: solid;
  border-width: 2px;
  border-color: rgb(92, 92, 92) black black rgb(92, 92, 92);
}

::placeholder {
  color: #ecf0f3;
  opacity: 0.8;
}
</style>
