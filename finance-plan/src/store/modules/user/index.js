import rootMutations from "./mutations.js";
import rootActions from "./actions.js";
import rootGetters from "./getters.js";

export default {
  namespaced: true,
  state: {
    users: [
      {
        firstName: "Friederike",
        lastName: "Ewers",
        email: "heyjoo.3@gmail.com",
        password: "abCD12!?",
        id: 1,
      },
      {
        firstName: "Nico",
        lastName: "Schulz",
        email: "nico.schulz1337@gmail.com",
        password: "abCD12!?",
        id: 2,
      },
      {
        firstName: "Jonas",
        lastName: "Platin",
        email: "jonas.platin1234@gmail.com",
        password: "abCD12!?",
        id: 3,
      },
    ],
    firstName: "Friederike",
    lastName: "Ewers",
    email: "heyjoo.3@gmail.com",
    password: "abCD12!?",

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
