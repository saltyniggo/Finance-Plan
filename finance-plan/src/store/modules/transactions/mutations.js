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
    state.transactions[state.toEditIndex].amount = packet;
  },
};
