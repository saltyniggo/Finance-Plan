export default {
  namespaced: true,
  state: {
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

    editProfile: true,
  },

  mutations: {
    updateFirstName(state, newFirst) {
      state.firstName = newFirst;
    },
    updateLastName(state, newLast) {
      state.lastName = newLast;
    },
    updateEmail(state, newEmail) {
      state.email = newEmail;
    },
    updatePassword(state, newPassword) {
      state.password = newPassword;
      console.log(newPassword);
    },
    checkPassword(state, newValue) {
      const password = newValue;
      const lengthCheck = password.length >= 8;
      const numberCheck = /[0-9]/.test(password);
      const capitalCheck = /[A-Z]/.test(password);
      const lowerCheck = /[a-z]/.test(password);
      const signCheck = /[!@#$%^&*()_+\-={};':"|,.<>?]/.test(password);
      const justNumbers = /^[0-9]+$/.test(password);

      state.passwordRequirements.lengthCheck = lengthCheck;
      state.passwordRequirements.numberCheck = numberCheck;
      state.passwordRequirements.capitalCheck = capitalCheck;
      state.passwordRequirements.lowerCheck = lowerCheck;
      state.passwordRequirements.signCheck = signCheck;
      state.passwordRequirements.justNumbers = justNumbers;

      if (
        lengthCheck &&
        numberCheck &&
        capitalCheck &&
        lowerCheck &&
        signCheck &&
        !justNumbers
      ) {
        console.log("Saved");
        state.passwordRequirements.requirementsOk = true;
      } else {
        console.log("Check Requirements");
        state.passwordRequirements.requirementsOk = false;
      }
    },
  },

  actions: {
    updateFirstName({ commit }, newFirst) {
      commit("updateFirstName", newFirst);
    },
    updateLastName({ commit }, newLast) {
      commit("updateLastName", newLast);
    },
    updateEmail({ commit }, newEmail) {
      commit("updateEmail", newEmail);
    },
    updatePassword({ commit }, newPassword) {
      commit("updatePassword", newPassword);
    },
    checkPassword({ commit }, newValue) {
      commit("checkPassword", newValue);
    },
  },

  getters: {
    getFirstName: (state) => state.firstName,
    getLastName: (state) => state.lastName,
    getEmail: (state) => state.email,
    getPassword: (state) => state.password,
    getPasswordRequirements: (state) => state.passwordRequirements,
    getEditProfile: (state) => state.editProfile,
  },
};
