export default {
  openEditModal(context, index) {
    context.commit("openEditModal", index);
  },
  closeEditModal(context) {
    context.commit("closeEditModal");
  },
};
