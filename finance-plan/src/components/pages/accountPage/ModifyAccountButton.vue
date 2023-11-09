<template>
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
</template>

<script>
export default {
  methods: {
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
    },
  },
};
</script>

<style scoped>
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
</style>
