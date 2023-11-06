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
  openNavRight(context) {
    context.commit("openNavRight");
  },
  closeNavRight(context) {
    context.commit("closeNavRight");
  },
  openAddModal(context, modal) {
    context.commit("openAddModal", modal);
  },
  closeAddModal(context) {
    context.commit("closeAddModal");
  },
  openProfileEdit(context) {
    context.commit("openProfileEdit");
  },
  closeProfileEdit(context) {
    context.commit("closeProfileEdit");
  },
  clickBackdrop(context) {
    context.commit("clickBackdrop");
  },

  initBackdrop(context) {
    context.commit("initBackdrop");
    console.log("action");
  },
};
