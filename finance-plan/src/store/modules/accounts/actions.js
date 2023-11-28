import accountService from "@/store/service/accountService.js";
export default {
  async deleteAccount(context, accId) {
    await accountService
      .deleteAccount(accId)
      .then((response) => {
        if (response == "successful") {
          context.commit("deleteAccount", accId);
        } else if (response == "unsuccessful") {
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
        if (response == "successful") {
          commit("accountModule/addAccount", payload);
        } else if (response == "unsucessful") {
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
        if (response == "successful") {
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
    let data = "123";
    await accountService
      .getAccounts(userId)
      .then((response) => {
<<<<<<< HEAD
        if (response) {
          commit("setAccounts", response);
=======
        if (response.statusText == "OK") {
          console.log("setAccounts");
          commit("setAccounts", response.data);
>>>>>>> b02f3455c152d6f00b903321e61f90fb70dd699c
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
