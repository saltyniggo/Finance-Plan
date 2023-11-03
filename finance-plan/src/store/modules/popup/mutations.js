export default {
  openEditModal(state, index) {
    state.isEditModalOpen = true;
    state.toEditIndex = index;
  },
  closeEditModal(state) {
    state.isEditModalOpen = false;
    state.toEditIndex = undefined;
  },
};
