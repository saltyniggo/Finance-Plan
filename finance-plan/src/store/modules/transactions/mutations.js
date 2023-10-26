export default {
  deleteTransaction(state, index) {
    state.transactions.splice(index, 1);
  },
};
