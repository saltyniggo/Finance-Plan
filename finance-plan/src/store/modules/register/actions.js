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

  login({ commit }) {
    commit("login");
  },

  logout({ commit }) {
    commit("logout");
  },
};
