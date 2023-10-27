import rootMutations from "./mutations.js";
import rootActions from "./actions.js";
import rootGetters from "./getters.js";

export default {
  namespaced: true,
  state: {
    isAuth: false,
    formData: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      passwordRepeat: "",
      lengthCheck: false,
      numberCheck: false,
      capitalCheck: false,
      lowerCheck: false,
      signCheck: false,
      justNumbers: false,
      requirementsOk: false,
      rightTwice: true,
    },
  },
  mutations: rootMutations,
  actions: rootActions,
  getters: rootGetters,
};
