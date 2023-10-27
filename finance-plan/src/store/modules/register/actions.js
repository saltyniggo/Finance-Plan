export default {
  updateFormData({ commit }, { field, value }) {
    commit("updateFormData", { field, value });
  },
  updatePasswordAction({ commit }) {
    commit("checkPassword");
  },

  updatePasswordRepeatAction({ commit }) {
    commit("doubleCheckPassword");
  },

  register({ commit }) {
    commit("register");
  },
};
