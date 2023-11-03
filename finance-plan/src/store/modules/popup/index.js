import rootMutations from "./mutations.js";
import rootActions from "./actions.js";
import rootGetters from "./getters.js";

export default {
  namespaced: true,
  state: {
    backdropIsVisible: false,
    isEditModalOpen: false,
    toEditIndex: undefined,
    isAddModalOpen: false,
    chosenAddModal: undefined,
  },
  mutations: rootMutations,
  actions: rootActions,
  getters: rootGetters,
};
