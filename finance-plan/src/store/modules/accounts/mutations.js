export default {
  deleteAccount(state, accId) {
    const index = state.accounts.findIndex((acc) => acc.id === accId);
    if (index > -1) {
      state.accounts.splice(index, 1);
    }
  },
};
