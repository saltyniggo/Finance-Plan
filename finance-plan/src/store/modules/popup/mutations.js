export default {
  openBackdrop(state) {
    state.backdropIsVisible = true;
  },
  closeBackdrop(state) {
    state.backdropIsVisible = false;
  },
  openEditModal(state, index) {
    state.isEditModalOpen = true;
    state.toEditIndex = index;
  },
  closeEditModal(state) {
    state.isEditModalOpen = false;
    state.toEditIndex = undefined;
  },
};
