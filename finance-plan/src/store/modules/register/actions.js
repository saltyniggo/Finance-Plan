import userService from "@/store/service/userService.js";
import store from "@/store";

export default {
  updateFormData({ commit }, { field, value }) {
    commit("updateFormData", { field, value });
  },
  checkPassword({ commit }) {
    commit("checkPassword");
  },

  checkPasswordRepeat({ commit }) {
    commit("doubleCheckPassword");
  },

  async register({ commit }) {
    commit("setRequestStatus", "loading");
    let requirementsOk = store.getters["registerModule/requirementsOK"];
    let rightTwice = store.getters["registerModule/rightTwice"];
    let registerData = store.getters["registerModule/getFormData"];
    if (rightTwice && requirementsOk) {
      await userService
        .postRegister(
          registerData.firstName,
          registerData.lastName,
          registerData.email,
          registerData.password
        )
        .then((response) => {
          commit("login");
          commit("userModule/setUser", response, { root: true });
          commit("setRequestStatus", undefined);
        })
        .catch((error) => {
          console.error("connection problem", error);
          commit("showErrorConnection");
          commit("setRequestStatus", undefined);
        });
    } else {
      console.error("other register error");
      commit("setRequestStatus", undefined);
    }
  },

  checkLoginEmail({ commit }) {
    commit("checkLoginEmail");
  },

  checkLoginPassword({ commit }) {
    commit("checkLoginPassword");
  },

  async login({ commit }) {
    commit("setRequestStatus", "loading");
    let login = store.getters["registerModule/getFormData"];
    await userService
      .getLogin(login.loginEmail, login.loginPassword)
      .then((response) => {
        if (response.data.data !== null) {
          commit("login");
          commit("userModule/setUser", response, { root: true });
          commit("setRequestStatus", undefined);
        } else if (response.data.data === null) {
          console.warn("wrong password");
          commit("showError");
          commit("setRequestStatus", undefined);
        }
      })
      .catch((error) => {
        console.error("connection problem", error);
        commit("showErrorConnection");
        commit("setRequestStatus", undefined);
      });
  },

  logout({ commit }) {
    commit("logout");
  },

  falseIsAuth({ commit }) {
    commit("falseIsAuth");
  },

  removeErrors({ commit }) {
    commit("removeErrors");
  },
};
