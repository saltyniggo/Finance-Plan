export default {
  changeInputVisibilty({ commit }) {
    commit("changeInputVisibilty");
  },
  showEdit({ commit, state }, payload) {
    commit("openEdit", payload);
    if (!state.isEditVisible) {
      if (state.editedNameInput.trim() === "") {
        commit("hideFloppyDisk");
      } else {
        commit("accountsModule/editAccount", {
          accId: payload,
          edit: state.editedNameInput,
        });
      }
      commit("closeEdit");
    }
  },
};
