<template>
  <div v-if="isInputVisible">
    <input
      type="text"
      id="nameInput"
      :value="editedNameInput"
      @input="updateNameInput"
      placeholder="Wie soll der Account heißen..."
      @keyup.enter="submitName()"
    />
    <button @click="submitName()" class="submitBtn">+</button>
  </div>
  <div v-else>
    <button
      class="addBtn"
      @click="changeInputVisibility()"
      :disabled="isDeleteDisabled"
    >
      + Account hinzufügen
    </button>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters("accountPage", [
      "isInputVisible",
      "isDeleteDisabled",
      "addNameInput",
    ]),
  },
  methods: {
    ...mapActions("accountsModule", ["addAccount"]),
    ...mapActions("accountPage", ["changeInputVisibility"]),
    submitName() {
      this.changeInputVisibility();
      this.addAccount(this.addNameInput);
      this.addNameInput = "";
    },
    updateNameInput(event) {
      this.$store.commit("accountPage/updateAddName", event.target.value);
    },
  },
};
</script>

<style scoped>
.inputField {
  display: inline-flex;
  width: 90%;
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

::placeholder {
  color: #ecf0f3;
  opacity: 0.8;
}
</style>
