import accountService from "@/store/service/accountService.js";

export default {
  async deleteAccount({ commit }, accId) {
    await accountService
      .deleteAccount(accId)
      .then((response) => {
        if (response.status === 200) {
          commit("deleteAccount", accId);
        } else {
          console.warn("ERROR");
        }
      })
      .catch((error) => {
        console.error("connection problem", error);
      });
  },

  async addAccount({ commit, dispatch }, payload) {
    await accountService
      .addAccount(payload)
      .then((response) => {
        if (response.status === 200) {
          commit("addAccount", payload);
          dispatch("getAccounts", payload.userId);
        } else {
          console.warn("ERROR");
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
        } else {
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
        }
      })
      .catch((error) => {
        console.error("connection problem", error);
        data = error;
      });
    return data;
  },
};
