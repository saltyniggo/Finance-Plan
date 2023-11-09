export default {
  changeInputVisibilty(state) {
    state.isInputVisible = !state.isInputVisible;
  },
  openEdit(state, payload) {
    state.isDeleteDisabled = true;
    state.showFloppyDisk = true;
    state.editedAccountId = payload;
    state.isEditVisible = !this.isEditVisible;
  },
  closeEdit(state) {
    state.isDeleteDisabled = false;
    state.showFloppyDisk = false;
    state.editedAccountId = undefined;
    state.isEditVisible = !this.isEditVisible;
  },
  hideFloppyDisk(state) {
    state.showFloppyDisk = false;
  },
  updateEditName(state, payload) {
    state.editedNameInput = payload;
  },
  updateAddName(state, payload) {
    state.addNameInput = payload;
  },
};
