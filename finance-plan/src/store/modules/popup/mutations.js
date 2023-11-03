export default {
  openBackdrop(state) {
    state.backdropIsVisible = true;
  },
  closeBackdrop(state) {
    state.backdropIsVisible = false;
  },
  openEditModal(state, index) {
    state.isAddModalOpen = false;
    state.isEditModalOpen = true;
    state.toEditIndex = index;
  },
  closeEditModal(state) {
    state.isEditModalOpen = false;
    state.toEditIndex = undefined;
  },
  openNavRight(state) {
    state.navRightOpen = true;
  },
  closeNavRight(state) {
    state.navRightOpen = false;
  },
  openAddModal(state, modal) {
    state.isEditModalOpen = false;
    state.isAddModalOpen = true;
    state.chosenAddModal = modal;
  },
  closeAddModal(state) {
    state.isAddModalOpen = false;
    state.chosenAddModal = undefined;
  },
  clickBackdrop(state) {
    if (state.isEditModalOpen === true) {
      state.isEditModalOpen = false;
      state.toEditIndex = undefined;
      state.backdropIsVisible = false;
    }
    if (state.isAddModalOpen === true) {
      state.isAddModalOpen = false;
      state.chosenAddModal = false;
      state.backdropIsVisible = false;
    }
  },
};
