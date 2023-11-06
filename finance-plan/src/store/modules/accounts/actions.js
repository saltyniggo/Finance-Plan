export default {
  deleteAccount(context, accId) {
    context.commit("deleteAccount", accId);
  },
  addAccount({ commit }, inputName) {
    commit("addAccount", inputName);
  },

  editAccount({ commit }, { accId, edit }) {
    commit("editAccount", { accId, edit });
  },
};
