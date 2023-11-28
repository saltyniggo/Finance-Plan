import accountService from "@/store/service/accountService.js";
/* import router from "@/router";
 */

export default {
  async deleteAccount({ commit, dispatch }, accId) {
    await accountService
      .deleteAccount(accId)
      .then((response) => {
        if (response.status === 200) {
          commit("deleteAccount", accId);
          dispatch("getAccounts");
        } else {
          console.warn("delete not possible");
        }
      })
      .catch((error) => {
        console.error("connection problem", error);
      });
  },

  async addAccount({ commit }, payload) {
    await accountService
      .addAccount(payload)
      .then((response) => {
        if (response.status === 200) {
          commit("addAccount", payload);
        } else {
          console.warn("ERROR");
          console.warn(
            "Something went wrong when trying to add a new account!"
          );
        }
      })
      .catch((error) => {
        console.error("connection problem", error);
      });
  },

  async editAccount({ commit }, payload) {
    await accountService
      .putAccountEdit(payload.accId, payload.edit)
      .then((response) => {
        if (response.status === 200) {
          commit("editAccount", payload);
        } else if (response == "unsucessful") {
          console.warn("ERROR");
        }
      })
      .catch((error) => {
        console.error("connection problem", error);
      });
  },

  async getAccounts({ commit }, userId) {
    let data;
    await accountService
      .getAccounts(userId)
      .then((response) => {
        if (response.status === 200) {
          commit("setAccounts", response);
          data = response;
        } else {
          console.error("ERROR:(");
          data = response;
          console.log(data);
        }
      })
      .catch((error) => {
        console.error("connection problem get account", error);
        data = error;
      });
    return data;
  },
};
