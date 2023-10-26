export default {
  deleteTransaction(state, index) {
    state.transactions.splice(index, 1);
  },
  addTransaction(state, packet) {
    state.transactions.push({
      date: packet.date,
      amount: packet.amount,
      description: packet.description,
      category: packet.category,
    });
  },
};
