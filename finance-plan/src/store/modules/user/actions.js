import userService from "@/store/service/userService";

export default {
  setUser({ commit }, payload) {
    commit("setuser", payload);
  },
  toggleEditProfile({ commit }) {
    commit("toggleEditProfile");
  },
  checkPassword({ commit }, newValue) {
    commit("checkPassword", newValue);
  },
  async putUser({ commit }, payload) {
    await userService
      .putUser(payload)
      .then((response) => {
        if (response == "successfull") {
          console.log("putUser");
          commit("userModule/updateUserData", {
            newFirst: payload.firstName,
            newLast: payload.lastName,
            newEmail: payload.email,
          });
          if (payload.password) {
            commit("userModule/updatePassword", payload.password);
          }
        } else if (response == "unsucessfull") {
          console.log("ERROR");
          commit("showError");
        }
      })
      .catch((error) => {
        console.error("connection problem", error);
        commit("showErrorConnection");
      });
  },
};
