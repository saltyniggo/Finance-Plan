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
  submitEdit(state, payload) {
    const { packet, index } = payload;
    console.log(index);
    console.log(state.transactions[index]);
    if (packet.date) state.transactions[index].date = packet.date;
    if (packet.amount) state.transactions[index].amount = packet.amount;
    if (packet.description)
      state.transactions[index].description = packet.description;
    if (packet.category) state.transactions[index].category = packet.category;
  },
  checkTransactionList(state) {
    if (state.transactions.length <= 0) {
      state.transactionsEmpty = true;
    } else {
      state.transactionsEmpty = false;
    }
  },
};
