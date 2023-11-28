export default {
  deleteAccount(state, accId) {
    const index = state.accounts.findIndex((acc) => acc.id === accId);
    if (index > -1) {
      state.accounts.splice(index, 1);
    }
  },

  addAccount(state, payload) {
    state.accounts.push({
      name: payload.name,
      accountBalance: 0,
      id: payload.userId,
    });
  },

  editAccount(state, payload) {
    const index = state.accounts.findIndex((acc) => acc.id === payload.accId);
    state.accounts[index].name = payload.edit;
  },

  setAccounts(state, response) {
    state.accounts = response.data.data;
  },
};
