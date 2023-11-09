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
    ...mapGetters("accountpage", [
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
