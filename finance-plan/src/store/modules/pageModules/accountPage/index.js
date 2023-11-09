import rootMutations from "./mutations.js";
import rootActions from "./actions.js";
import rootGetters from "./getters.js";

export default {
  namespaced: true,
  state: {
    isInputVisible: false,
    isEditVisible: false,
    isDeleteDisabled: false,
    showFloppyDisk: false,
    editedAccountId: undefined,
    editedNameInput: "",
    addNameInput: "",
  },
  mutations: rootMutations,
  actions: rootActions,
  getters: rootGetters,
};
