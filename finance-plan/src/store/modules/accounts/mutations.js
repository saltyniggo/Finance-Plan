export default {
  deleteAccount(state, accId) {
    const index = state.accounts.findIndex((acc) => acc.id === accId);
    if (index > -1) {
      state.accounts.splice(index, 1);
    }
  },
  addAccount(state, inputName) {
    let uniqueId = new Date().toISOString();
    state.accounts.push({
      name: inputName,
      balance: 0,
      id: uniqueId,
    });
  },
};
