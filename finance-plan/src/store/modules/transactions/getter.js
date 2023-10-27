export default {
  getTransactions(state) {
    return state.transactions;
  },
  isEditModalOpen(state) {
    return state.isEditModalOpen;
  },
  transactionsEmpty(state) {
    return state.transactionsEmpty;
  },
};
