export default {
  openBackdrop({ commit }) {
    commit("openBackdrop");
  },
  closeBackdrop({ commit }) {
    commit("closeBackdrop");
  },
  openEditModal({ commit }, id) {
    commit("openEditModal", id);
  },
  closeEditModal({ commit }) {
    commit("closeEditModal");
  },
  openNavRight({ commit }) {
    commit("openNavRight");
  },
  closeNavRight({ commit }) {
    commit("closeNavRight");
  },
  openAddModal({ commit }, modal) {
    commit("openAddModal", modal);
  },
  closeAddModal({ commit }) {
    commit("closeAddModal");
  },
  openProfileEdit({ commit }) {
    commit("openProfileEdit");
  },
  closeProfileEdit({ commit }) {
    commit("closeProfileEdit");
  },
  clickBackdrop({ commit }) {
    commit("clickBackdrop");
  },

  initBackdrop({ commit }) {
    commit("initBackdrop");
  },
};
