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
      transactions: [
        {
          transactionId: 1,
          date: "01.11.2003",
          amount: 120,
          description: "Fallschirm-Springen",
          category: "Freizeit",
        },
        {
          transactionId: 2,
          date: "29.07.2002",
          amount: 140,
          description: "Miete + Strom",
          category: "Miete",
        },
        {
          transactionId: 3,
          date: "16.12.1998",
          amount: 20,
          description: "Neues Katzenklo",
          category: "Katze",
        },
      ],
    };
  },
  mutations: rootMutations,
  actions: rootActions,
  getters: rootGetters,
};
