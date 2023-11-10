import router from "@/router";
export default {
  updateFormData(state, { field, value }) {
    state.formData[field] = value;
  },

  updatePassword(state, value) {
    state.formData.password = value;
  },
  updatePasswordRepeat(state, value) {
    state.formData.passwordRepeat = value;
  },

  checkPassword(state) {
    const password = state.formData.password;
    const lengthCheck = password.length >= 8;
    const numberCheck = /[0-9]/.test(password);
    const capitalCheck = /[A-Z]/.test(password);
    const lowerCheck = /[a-z]/.test(password);
    const signCheck = /[!@#$%^&*()_+\-={};':"|,.<>?]/.test(password);
    const justNumbers = /^[0-9]+$/.test(password);

    state.formData.lengthCheck = lengthCheck;
    state.formData.numberCheck = numberCheck;
    state.formData.capitalCheck = capitalCheck;
    state.formData.lowerCheck = lowerCheck;
    state.formData.signCheck = signCheck;
    state.formData.justNumbers = justNumbers;

    if (
      lengthCheck &&
      numberCheck &&
      capitalCheck &&
      lowerCheck &&
      signCheck &&
      !justNumbers
    ) {
      state.formData.requirementsOk = true;
    } else {
      state.formData.requirementsOk = false;
    }
  },

  doubleCheckPassword(state) {
    if (state.formData.password === state.formData.passwordRepeat) {
      state.formData.rightTwice = true;
    } else {
      state.formData.rightTwice = false;
    }
  },

  checkLoginEmail(state) {
    if (state.formData.loginEmail != state.loginData.userEmail) {
      state.loginData.emailRight = false;
    }
    if (state.formData.loginEmail == state.loginData.userEmail) {
      state.loginData.emailRight = true;
    }
  },

  checkLoginPassword(state) {
    if (state.formData.loginPassword != state.loginData.userPassword) {
      state.loginData.passwordRight = false;
    }
    if (state.formData.loginPassword == state.loginData.userPassword) {
      state.loginData.passwordRight = true;
    }
  },

  login(state) {
    state.isAuth = true;
    router.push("/accounts");
  },

  showError(state) {
    state.loginData.showError = true;
  },

  logout(state) {
    state.isAuth = false;
    router.push("/login");
  },

  falseIsAuth(state) {
    state.isAuth = false;
  },

  showErrorConnection(state) {
    state.loginData.showErrorConnection = true;
  },

  removeErrors(state) {
    state.loginData.showErrorConnection = false;
    state.loginData.showError = false;
  },

  setRequestStatus(state, payload) {
    state.requestStatus = payload;
  },
};
