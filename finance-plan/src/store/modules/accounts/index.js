import rootMutations from "./mutations.js";
import rootActions from "./actions.js";
import rootGetters from "./getters.js";

export default {
  namespaced: true,
  state: {
    accounts: [],
  },
  mutations: rootMutations,
  actions: rootActions,
  getters: rootGetters,
};
