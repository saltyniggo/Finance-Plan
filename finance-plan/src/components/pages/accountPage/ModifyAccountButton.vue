<template>
  <div>
    <button
      class="editBtn"
      @click="showEdit(account.id)"
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
</template>

<script>
import { mapActions } from "vuex";
import { mapGetters } from "vuex";

export default {
  props: ["account"],
  computed: {
    ...mapGetters("accountPage", ["isDeleteDisabled", "showFloppyDisk"]),
  },
  methods: {
    ...mapActions("accountPage", ["showEdit", "isEditBtnDisabled"]),
  },
};
</script>

<style scoped>
.editBtn {
  width: 50%;
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
</style>
