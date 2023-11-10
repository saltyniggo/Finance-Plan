import userService from "@/store/service/userService";

export default {
  setUser({ commit }, payload) {
    commit("setUser", payload);
  },
  toggleEditProfile({ commit }) {
    commit("toggleEditProfile");
  },
  checkPassword({ commit }, newValue) {
    commit("checkPassword", newValue);
  },
  async putUser({ commit }, payload) {
    commit("setRequestStatus", "loading");
    await userService
      .putUser(payload)
      .then((response) => {
        if (response == "successful") {
          console.log("putUser");
          commit("userModule/updateUserData", {
            newFirst: payload.firstName,
            newLast: payload.lastName,
            newEmail: payload.email,
          });
          commit("popupModule/closeBackdrop");
          commit("popupModule/closeProfileEdit");
          if (payload.password) {
            commit("userModule/updatePassword", payload.password);
          }
          commit("setRequestStatus", undefined);
        } else if (response == "unsucessfull") {
          console.log("ERROR");
          commit("setRequestStatus", "editProblem");
        }
      })
      .catch((error) => {
        console.error("connection problem", error);
        commit("setRequestStatus", "connectionProblem");
      });
  },
  async deleteUser({ commit }, userId) {
    commit("setRequestStatus", "loading");
    await userService
      .deleteUser(userId)
      .then((response) => {
        if (response == "successful") {
          console.log("delete");
          commit("deleteUser");
          commit("setRequestStatus", undefined);
        } else if (response == "unsuccessful") {
          console.log("delete not possible");
          commit("setRequestStatus", "deleteProblem");
        }
      })
      .catch((error) => {
        console.log("connection problem", error);
        commit("setRequestStatus", "connectionProblem");
      });
  },
};
