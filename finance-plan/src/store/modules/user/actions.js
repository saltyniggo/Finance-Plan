export default {
  toggleEditProfile({ commit }) {
    commit("toggleEditProfile");
  },

  updateFirstName({ commit }, newFirst) {
    commit("updateFirstName", newFirst);
  },
  updateLastName({ commit }, newLast) {
    commit("updateLastName", newLast);
  },
  updateEmail({ commit }, newEmail) {
    commit("updateEmail", newEmail);
  },
  updatePassword({ commit }, newPassword) {
    commit("updatePassword", newPassword);
  },
  checkPassword({ commit }, newValue) {
    commit("checkPassword", newValue);
  },
};
