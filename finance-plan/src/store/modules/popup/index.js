import rootMutations from "./mutations.js";
import rootActions from "./actions.js";
import rootGetters from "./getters.js";

export default {
  namespaced: true,
  state: {
    backdropIsVisible: false,
    isEditModalOpen: false,
    toEditIndex: undefined,
    navRightOpen: false,
    isAddModalOpen: false,
    chosenAddModal: undefined,
    isEditProfileOpen: false,
  },
  mutations: rootMutations,
  actions: rootActions,
  getters: rootGetters,
};
