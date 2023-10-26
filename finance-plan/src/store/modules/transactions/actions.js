export default {
  deleteTransaction(context, value) {
    context.commit("deleteTransaction", value);
  },
};
