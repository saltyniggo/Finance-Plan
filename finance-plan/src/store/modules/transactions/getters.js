export default {
  getTransactions(state) {
    return {
      transactions: state.transactions,
      sum: state.sum + "€",
    };
  },
  currentState: (state) => (id) => {
    return state.transactions[id];
  },
  transactionsEmpty(state) {
    return state.transactionsEmpty;
  },
};
