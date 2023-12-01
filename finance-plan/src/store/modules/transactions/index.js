import rootMutations from "./mutations.js";
import rootActions from "./actions.js";
import rootGetters from "./getters.js";

export default {
  namespaced: true,
  state() {
    return {
      currentAccount: undefined,
      categories: {
        Haushalt: 0,
        Essen: 1,
        Freizeit: 2,
        Auto: 3,
        Hund: 4,
        Katze: 5,
        Maus: 6,
      },
      transactionsEmpty: undefined,
      sum: 420,
      transactions: [],
    };
  },
  mutations: rootMutations,
  actions: rootActions,
  getters: rootGetters,
};
