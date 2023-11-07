import accountService from "@/store/service/accountService.js";
export default {
  async deleteAccount(context, accId) {
    await accountService
      .deleteAccount(accId)
      .then((response) => {
        if (response == "successfull") {
          console.log("delte");
          context.commit("deleteAccount", accId);
        } else if (response == "unsuccessfull") {
          console.log("delete not possible");
        }
      })
      .catch((error) => {
        console.log("conenction problem", error);
      });
  },
  temp({ commit }, inputName) {
    if (inputName != "" || undefined) {
      commit("addAccount", inputName);
    }
  },
  async addAccount({ commit }, payload) {
    await accountService
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
