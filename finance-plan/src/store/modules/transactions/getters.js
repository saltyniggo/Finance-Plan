export default {
  getTransactions(state) {
    return {
      transactions: state.transactions,
      sum: state.sum + "€",
    };
  },
  transactionsEmpty(state) {
    return state.transactionsEmpty;
  },
};
