import accountService from "@/store/service/accountService.js";
import router from "@/router";
export default {
  async deleteAccount(context, accId) {
    await accountService
      .deleteAccount(accId)
      .then((response) => {
        if (response == "successful") {
          router.push("/login");
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
        console.log(response);
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
        if (response) {
          console.log(response);
          commit("setAccounts", response);
          data = response;
        } else {
          console.error("ERROR:(");
          data = response;
        }
      })
      .catch((error) => {
        console.error("connection problem get account", error);
        data = error;
      });
    return data;
  },
};
