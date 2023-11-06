import rootMutations from "./mutations.js";
import rootActions from "./actions.js";
import rootGetters from "./getters.js";

export default {
  namespaced: true,
  state: {
    accounts: [
      {
        name: "Sparkasse",
        balance: 70,
        id: 1,
      },
      {
        name: "Volksbank",
        balance: -70,
        id: 2,
      },
      {
        name: "Commerz",
        balance: 700,
        id: 3,
      },
    ],
  },
  mutations: rootMutations,
  actions: rootActions,
  getters: rootGetters,
};
