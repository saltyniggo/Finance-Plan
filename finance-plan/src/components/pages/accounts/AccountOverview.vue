<template>
  <base-card v-if="status <= 299 || status >= 200">
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
            balance: account.accountBalance,
          },
        }"
      >
        <span>{{ account.name }}</span
        ><span>{{ account.accountBalance }}</span>
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
    <div v-if="isInputVisible" class="inputField">
      <input
        type="text"
        id="nameInput"
        v-model="addNameInput"
        placeholder="Wie soll der Account heißen..."
        @keyup.enter="submitName()"
      />
      <button @click="submitName()" class="submitBtn">+</button>
    </div>
    <button
      v-else
      class="addBtn"
      @click="showInput()"
      :disabled="isDeleteDisabled"
    >
      + Account hinzufügen
    </button>
  </base-card>
  <div v-else-if="status > 299 || status < 200">
    <base-card>
      <h2>
        Oops, hier ist wohl etwas schief gegangen... 😭🫠
        <br />Hier kommst du zurück zum
        <router-link to="/login">Login</router-link>
      </h2>
    </base-card>
  </div>
  <base-card v-else>
    <SpinningLoader></SpinningLoader>
    <h2>Accountübersicht wird geladen</h2></base-card
  >
</template>

<script>
import { mapActions } from "vuex";
import SpinningLoader from "@/components/base/SpinningLoader.vue";

export default {
  data() {
    return {
      status: null,
      isInputVisible: false,
      isEditVisible: false,
      editedAccountId: null,
      showFloppyDisk: false,
      editedNameInput: "",
      addNameInput: "",
      isDeleteDisabled: false,
    };
  },
  computed: {
    accounts() {
      return this.$store.getters["accountsModule/getAccounts"];
    },
  },
  methods: {
    ...mapActions("accountsModule", [
      "addAccount",
      "deleteAccount",
      "editAccount",
    ]),
    showInput() {
      this.isInputVisible = !this.isInputVisible;
    },
    isEditBtnDisabled(accId) {
      return this.isEditVisible && this.editedAccountId !== accId;
    },
    showEdit(accId) {
      this.isDeleteDisabled = true;
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
    },
    submitName() {
      this.showInput();
      this.addAccount(this.addNameInput);
      this.addNameInput = "";
    },
  },
  async beforeMount() {
    this.status = null;
    const userId = this.$store.getters["userModule/getUserId"];
    const response = await this.$store.dispatch(
      "accountsModule/getAccounts",
      userId
    );
<<<<<<< HEAD
    this.status = response.status;
=======
    console.log("response: " + response);
    // this.status = response.response.status;
>>>>>>> b02f3455c152d6f00b903321e61f90fb70dd699c
  },
  components: { SpinningLoader },
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

.inputField {
  display: inline-flex;
  width: 90%;
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
  /* background: linear-gradient(135deg, #20639b, #05da93); */
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
  /* background: linear-gradient(135deg, #20639b, #05da93); */
  color: #ecf0f3;
  font-weight: 500;
  font-size: 2vh;
  text-shadow: 2px 2px 3px #151232;
  border-style: solid;
  border-width: 2px;
  border-color: rgb(92, 92, 92) black black rgb(92, 92, 92);
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
.submitBtn {
  width: 11%;
  padding: 2%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
  border-radius: 20px;
  background: #17253e;
  color: #ecf0f3;
  font-weight: 500;
  font-size: 2vh;
  text-shadow: 2px 2px 3px #151232;
  margin-left: 1%;
}

.addBtn,
#nameInput {
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

#nameInput {
  border: 2px solid;
  border-color: rgb(92, 92, 92) black black rgb(92, 92, 92);
}

::placeholder {
  color: #ecf0f3;
  opacity: 0.8;
}
</style>
