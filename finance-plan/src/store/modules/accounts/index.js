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
  mutations: {
    addAccount(state, inputName) {
      let uniqueId = new Date().toISOString();
      state.accounts.push({
        name: inputName,
        balance: 0,
        id: uniqueId,
      });
    },
  },
  actions: {
    addAccount({ commit }, inputName) {
      commit("addAccount", inputName);
    },
  },
  getters: {
    getAccounts: (state) => state.accounts,
  },
};
