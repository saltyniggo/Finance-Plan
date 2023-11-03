export default {
  openBackdrop(context) {
    context.commit("openBackdrop");
  },
  closeBackdrop(context) {
    context.commit("closeBackdrop");
  },
  openEditModal(context, index) {
    context.commit("openEditModal", index);
  },
  closeEditModal(context) {
    context.commit("closeEditModal");
  },
};
