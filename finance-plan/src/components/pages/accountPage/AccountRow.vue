<template>
  <div>
    <input
      v-if="isEditVisible && editedAccountId === account.id"
      type="text"
      :placeholder="account.name"
      :value="editedNameInput"
      @input="updateNameInput"
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
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  props: ["account"],
  computed: {
    ...mapGetters("accountPage", [
      "isEditVisible",
      "editedAccountId",
      "editedNameInput",
    ]),
  },
  methods: {
    updateNameInput(event) {
      this.$store.commit("accountPage/updateEditName", event.target.value);
    },
  },
};
</script>

<style scoped>
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
</style>
