import accountService from "@/store/service/accountService.js";
export default {
  async deleteAccount(context, accId) {
    await accountService
      .deleteAccount(accId)
      .then((response) => {
        if (response == "successful") {
          console.log("delte");
          context.commit("deleteAccount", accId);
        } else if (response == "unsuccessful") {
          console.log("delete not possible");
        }
      })
      .catch((error) => {
        console.log("conenction problem", error);
      });
  },

  async addAccount({ commit }, payload) {
    await accountService
      .addAccount(payload)
      .then((response) => {
        if (response == "successful") {
          console.log("addAccount");
          commit("accountModule/addAccount", payload);
        } else if (response == "unsucessful") {
          console.error("ERROR");
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
        if (response == "successful") {
          console.log("editAccount");
          commit("editAccount", payload);
        } else if (response == "unsucessful") {
          console.error("ERROR");
        }
      })
      .catch((error) => {
        console.error("connection problem", error);
      });
  },

  async getAccounts({ commit }, userId) {
    let data = undefined;
    await accountService
      .getAccounts(userId)
      .then((response) => {
        if (response.statusText == "OK") {
          console.log("setAccounts");
          commit("setAccounts", response.data);
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
