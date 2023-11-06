export default {
  deleteAccount(context, accId) {
    context.commit("deleteAccount", accId);
  },
  addAccount({ commit }, inputName) {
    if (inputName != "" || undefined) {
      commit("addAccount", inputName);
    }
  },
};
