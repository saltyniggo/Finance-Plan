export default {
  deleteAccount(context, accId) {
    context.commit("deleteAccount", accId);
  },
};
