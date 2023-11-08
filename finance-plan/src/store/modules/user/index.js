import rootMutations from "./mutations.js";
import rootActions from "./actions.js";
import rootGetters from "./getters.js";

export default {
  namespaced: true,
  state: {
    userId: 187,
    firstName: "Friederike",
    lastName: "Ewers",
    email: "heyjoo.3@gmail.com",
    password: "abCD12!?",
    accounts: undefined,

    passwordRequirements: {
      lengthCheck: false,
      numberCheck: false,
      capitalCheck: false,
      lowerCheck: false,
      signCheck: false,
      justNumbers: false,
      requirementsOk: false,
    },

    editProfile: false,
  },

  mutations: rootMutations,

  actions: rootActions,

  getters: rootGetters,
};
