import service from "../../service/axios.js";

export default {
  namespaced: true,
  state() {
    return { feed: null, response: null };
  },
  mutations: {
    postFeed(state, payload) {
      state.feed = payload.feed;
      state.response = payload.response;
    },
  },
  actions: {
    async postFeed({ commit }, payload) {
      await service
        .postFeed(payload)
        .then((response) =>
          commit("postFeed", { feed: payload, response: response })
        );
    },
  },
  getters: {
    getResponse(state) {
      return state.response;
    },
  },
};
