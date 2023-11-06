export default {
  getTransactions(state) {
    return {
      transactions: state.transactions,
      sum: state.sum + "€",
    };
  },
  currentState: (state) => (index) => {
    return state.transactions.find(
      (transaction) => transaction.index === index
    );
  },
  transactionsEmpty(state) {
    return state.transactionsEmpty;
  },
};
