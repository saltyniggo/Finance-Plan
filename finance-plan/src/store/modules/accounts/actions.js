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

  async editAccount({ commit }, { accId, edit }) {
    await accountService
      .putAccountEdit(accId, edit)
      .then((response) => {
        if (response == "successful") {
          console.log("editAccount");
          commit("editAccount", { accId, edit });
        } else if (response == "unsucessful") {
          console.error("ERROR");
        }
      })
      .catch((error) => {
        console.error("connection problem", error);
      });
  },

  async getAccounts({ commit }, userId) {
    await accountService
      .getAccounts(userId)
      .then((response) => {
        if (response == "successful") {
          console.log("editAccount");
          commit("setAccounts", response);
          return response;
        } else if (response == "unsucessful") {
          console.error("ERROR");
          return false;
        }
      })
      .catch((error) => {
        console.error("connection problem", error);
        return false;
      });
  },
};
