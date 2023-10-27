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
  openEditModal(state, index) {
    state.isEditModalOpen = true;
    state.toEditIndex = index;
  },
  submitEdit(state, packet) {
    if (packet.date) state.transactions[state.toEditIndex].date = packet.date;
    if (packet.amount)
      state.transactions[state.toEditIndex].amount = packet.amount;
    if (packet.description)
      state.transactions[state.toEditIndex].description = packet.description;
    if (packet.category)
      state.transactions[state.toEditIndex].category = packet.category;
    state.isEditModalOpen = false;
    state.toEditIndex = null;
  },
};
