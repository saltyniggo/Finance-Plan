export default {
  deleteAccount(state, accId) {
    const index = state.accounts.findIndex((acc) => acc.id === accId);
    if (index > -1) {
      state.accounts.splice(index, 1);
    }
  },

  addAccount(state, payload) {
    state.accounts.push({
      id: payload.userId,
      accountBalance: 0,
      name: payload.name,
    });
  },

  editAccount(state, payload) {
    const index = state.accounts.findIndex((acc) => acc.id === payload.accId);
    state.accounts[index].name = payload.edit;
  },

  setAccounts(state, response) {
    console.log(response.data.data);
    state.accounts = response.data.data;
  },
};
