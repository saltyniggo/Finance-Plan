export default {
  deleteAccount(context, accId) {
    context.commit("deleteAccount", accId);
  },
  addAccount({ commit }, inputName) {
    if (inputName != "" || undefined) {
      commit("addAccount", inputName);
    }
  },

  editAccount({ commit }, { accId, edit }) {
    commit("editAccount", { accId, edit });
  },
};

// const actions = {
//   async postFeed({commit}, payload) {
//       await service.postFeed(payload)
//           .then(response => commit('postFeed', { feed: payload, response: response}));
//   }
// }
