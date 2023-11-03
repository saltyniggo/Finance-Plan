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
  mutations: {},
  actions: {},
  getters: {
    getAccounts: (state) => state.accounts,
  },
};
