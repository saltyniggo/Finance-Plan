export default {
  backdropStatus(state) {
    return state.backdropIsVisible;
  },
  isEditModalOpen(state) {
    return state.isEditModalOpen;
  },
  navRightOpen(state) {
    return state.navRightOpen;
  },
  isAddModalOpen(state) {
    return state.isAddModalOpen;
  },
  chosenAddModal(state) {
    return state.chosenAddModal;
  },
  isEditProfileOpen(state) {
    return state.isEditProfileOpen;
  },
  currentId(state) {
    return state.toEditId;
  },
};
