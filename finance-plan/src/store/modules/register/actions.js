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
    let requirementsOk = store.getters["registerModule/requirementsOK"];
    let rightTwice = store.getters["registerModule/rightTwice"];
    console.log(requirementsOk, rightTwice);

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
          console.log("login");
          commit("login");
          commit("userModule/setUser", response);
        })
        .catch((error) => {
          console.log("conenction problem", error);
          commit("showErrorConnection");
        });
    } else {
      console.log("other register error");
    }
  },

  checkLoginEmail({ commit }) {
    commit("checkLoginEmail");
  },

  checkLoginPassword({ commit }) {
    commit("checkLoginPassword");
  },

  async login({ commit }) {
    let login = store.getters["registerModule/getFormData"];
    console.log(login.loginEmail, login.loginPassword);
    await userService
      .getLogin(login.loginEmail, login.loginPassword)
      .then((response) => {
        if (response == "successful") {
          console.log("login");
          commit("login");
          commit("userModule/setUser", response);
        } else if (response == "unsuccessful") {
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
