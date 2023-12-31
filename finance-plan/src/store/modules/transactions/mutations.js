export default {
  deleteTransaction(state, transactionId) {
    state.transactions.filter(
      (transaction) => transaction.transactionId !== transactionId
    );
  },
  addTransaction(state, packet) {
    state.transactions.push({
      date: packet.date,
      amount: packet.amount,
      description: packet.description,
      category: packet.category,
    });
  },
  submitEdit(state, payload) {
    const { packet, id } = payload;
    if (packet.date) state.transactions[id].date = packet.date;
    if (packet.amount) state.transactions[id].amount = packet.amount;
    if (packet.description)
      state.transactions[id].description = packet.description;
    if (packet.category) state.transactions[id].category = packet.category;
  },

  setTransactions(state, { data, id }) {
    state.transactions = data;
    state.currentAccount = id;
  },

  getCategoryId(state, categoryName) {
    const categoryId = state.categories[categoryName];
    return categoryId !== undefined ? categoryId : null;
  },
};
