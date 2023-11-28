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
        if (response.data.data !== null) {
          commit("updateUserData", {
            newFirst: payload.firstName,
            newLast: payload.lastName,
            newEmail: payload.email,
          });
          commit("updatePassword", payload.password);
          commit("popupModule/closeBackdrop", { root: true });
          commit("popupModule/closeProfileEdit");
          commit("setRequestStatus", undefined);
        } else if (response.data.data === null) {
          console.error("ERROR");
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
          commit("deleteUser");
          commit("setRequestStatus", undefined);
        } else if (response == "unsuccessful") {
          console.warn("delete not possible");
          commit("setRequestStatus", "deleteProblem");
        }
      })
      .catch((error) => {
        console.error("connection problem", error);
        commit("setRequestStatus", "connectionProblem");
      });
  },
};
