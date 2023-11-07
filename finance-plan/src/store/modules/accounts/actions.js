import userService from "@/store/service/accountService";

export default {
  deleteAccount(context, accId) {
    context.commit("deleteAccount", accId);
  },
  temp({ commit }, inputName) {
    if (inputName != "" || undefined) {
      commit("addAccount", inputName);
    }
  },
  async addAccount({ commit }, payload) {
    await userService
      .addAccount(payload)
      .then((response) => {
        if (response == "successfull") {
          console.log("addAccount");
          commit("accountModule/addAccount", payload);
        } else if (response == "unsucessfull") {
          console.error("ERROR");
          commit("showError");
        }
      })
      .catch((error) => {
        console.error("connection problem", error);
        commit("showErrorConnection");
      });
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
