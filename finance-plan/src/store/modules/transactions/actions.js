export default {
  deleteTransaction(context, value) {
    context.commit("deleteTransaction", value);
  },
  addTransaction(context, packet) {
    context.commit("addTransaction", packet);
  },
};
