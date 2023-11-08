export default {
  openBackdrop(state) {
    state.backdropIsVisible = true;
  },
  closeBackdrop(state) {
    state.backdropIsVisible = false;
  },
  openEditModal(state, id) {
    state.isAddModalOpen = false;
    state.isEditModalOpen = true;
    state.toEditId = id;
  },
  closeEditModal(state) {
    state.isEditModalOpen = false;
    state.toEditId = undefined;
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
  openProfileEdit(state) {
    state.isEditProfileOpen = true;
  },
  closeProfileEdit(state) {
    state.isEditProfileOpen = false;
  },
  clickBackdrop(state) {
    if (state.isEditModalOpen === true) {
      state.isEditModalOpen = false;
      state.toEditId = undefined;
      state.backdropIsVisible = false;
    }
    if (state.isAddModalOpen === true) {
      state.isAddModalOpen = false;
      state.chosenAddModal = false;
      state.backdropIsVisible = false;
    }
    if (state.isEditProfileOpen === true) {
      state.isEditProfileOpen = false;
      state.backdropIsVisible = false;
    }
  },

  initBackdrop(state) {
    state.backdropIsVisible = false;
    state.isEditModalOpen = false;
    state.toEditId = undefined;
    state.navRightOpen = false;
    state.isAddModalOpen = false;
    state.chosenAddModal = undefined;
    state.isEditProfileOpen = false;
  },
};
