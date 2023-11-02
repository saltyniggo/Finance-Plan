export default {
  getTransactions(state) {
    return {
      transactions: state.transactions,
      sum: state.sum + "€",
    };
  },
  isEditModalOpen(state) {
    return state.isEditModalOpen;
  },
  transactionsEmpty(state) {
    return state.transactionsEmpty;
  },
};
