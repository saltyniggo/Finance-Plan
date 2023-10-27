import rootMutations from "./mutations.js";
import rootActions from "./actions.js";
import rootGetters from "./getter.js";

export default {
  namespaced: true,
  state() {
    return {
      isEditModalOpen: false,
      toEditIndex: null,
      transactions: [
        {
          date: "01.11.2003",
          amount: 120,
          description: "Fallschirm-Springen",
          category: "Freizeit",
        },
        {
          date: "29.07.2002",
          amount: 140,
          description: "Miete + Strom",
          category: "Miete",
        },
        {
          date: "16.12.1998",
          amount: 20,
          description: "Neues Katzenklo",
          category: "Katze",
        },
        {
          date: "16.12.1998",
          amount: 20,
          description: "Neues Katzenkino",
          category: "Katze",
        },
        {
          date: "16.12.1998",
          amount: 20,
          description: "Neues Katzenpferd",
          category: "Katze",
        },
        {
          date: "16.12.1998",
          amount: 20,
          description: "Neues Katzentoilette",
          category: "Katze",
        },
      ],
    };
  },
  mutations: rootMutations,
  actions: rootActions,
  getters: rootGetters,
};
