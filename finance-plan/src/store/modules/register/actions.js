import userService from "@/store/service/userService.js";

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

  register({ commit }) {
    commit("register");
  },

  checkLoginEmail({ commit }) {
    commit("checkLoginEmail");
  },

  checkLoginPassword({ commit }) {
    commit("checkLoginPassword");
  },

  // login({ commit }) {
  //   commit("login");
  // },

  async login({ commit }, payload) {
    await userService
      .postLogin(payload)
      .then((response) => {
        if (response == "sucessfull") {
          console.log("login");
          commit("login");
          commit("userModule/setUser", response);
        } else if (response == "unsucessfull") {
          console.log("wrong password");
          commit("showError");
        }
      })
      .catch((error) => {
        console.log("conenction problem", error);
        commit("showErrorConnection");
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
