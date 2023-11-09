<template>
  <base-card>
    <h2>Accounts</h2>
    <div v-for="account in accounts" :key="account.id" class="row">
      <input
        v-if="isEditVisible && editedAccountId === account.id"
        type="text"
        :placeholder="account.name"
        v-model="editedNameInput"
        class="editInput"
      />

      <router-link
        v-else
        class="navBtn"
        :to="{
          name: 'account',
          params: {
            name: account.name,
            id: account.id,
            balance: account.balance,
          },
        }"
      >
        <span>{{ account.name }}</span
        ><span>{{ account.balance }}</span>
      </router-link>
      <button
        class="editBtn"
        @click="showEdit(account.id, $event)"
        :disabled="isEditBtnDisabled(account.id)"
      >
        <i
          v-if="showFloppyDisk && !isEditBtnDisabled(account.id)"
          class="fa-solid fa-floppy-disk"
        ></i>
        <i v-else class="fa-solid fa-pen"></i>
      </button>
      <button
        class="editBtn"
        @click="deleteAccount(account.id)"
        :disabled="isDeleteDisabled"
      >
        <i class="fa-solid fa-trash"></i>
      </button>
    </div>
    <add-account-input></add-account-input>
  </base-card>
</template>

<script>
import { mapActions } from "vuex";
import AddAccountInput from "./AddAccountInput.vue";

export default {
  components: { AddAccountInput },
  data() {
    return {
      response: null,
      isEditVisible: false,
      editedAccountId: null,
      showFloppyDisk: false,
      editedNameInput: "",
      isDeleteDisabled: false,
    };
  },
  computed: {
    accounts() {
      return this.$store.getters["accountsModule/getAccounts"];
    },
  },

  methods: {
    ...mapActions("accountsModule", ["deleteAccount", "editAccount"]),
    isEditBtnDisabled(accId) {
      return this.isEditVisible && this.editedAccountId !== accId;
    },
    /* 
    showEdit(accId, event) {
      this.isDeleteDisabled = true;
      const button = event.target;
      console.log(button);
      this.showFloppyDisk = true;
      this.editedAccountId = accId;

      this.isEditVisible = !this.isEditVisible;

      if (!this.isEditVisible) {
        if (this.editedNameInput.trim() == "") {
          this.showFloppyDisk = false;
        } else {
          this.editAccount({ accId: accId, edit: this.editedNameInput });
        }

        this.editedNameInput = "";
        this.showFloppyDisk = false;
        this.isDeleteDisabled = false;
      }
    }, */
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
