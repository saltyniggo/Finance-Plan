import rootMutations from "./mutations.js";
import rootActions from "./actions.js";
import rootGetters from "./getters.js";

export default {
  namespaced: true,
  state: {
    registrationTemp: [],
    // isAuth: false,
    isAuth: true,
    isLoggedIn: false,
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
      loginEmail: "",
      loginPassword: "",
    },
    loginData: {
      // userEmail: "heyjoo.3@gmail.com",
      // userPassword: "abCD12!?",

      passwordRight: false,
      emailRight: false,
      showError: false,
      showErrorConnection: false,

      // firstName: "Frieda",
      // lastName: "Ewers",
    },
  },
  mutations: rootMutations,
  actions: rootActions,
  getters: rootGetters,
};
