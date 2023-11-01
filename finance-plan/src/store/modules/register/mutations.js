export default {
  updateFormData(state, { field, value }) {
    state.formData[field] = value;
    console.log("update");
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
      console.log("Saved");
      state.formData.requirementsOk = true;
    } else {
      console.log("Check Requirements");
      state.formData.requirementsOk = false;
    }
  },

  doubleCheckPassword(state) {
    if (state.formData.password === state.formData.passwordRepeat) {
      console.log("2x right");
      state.formData.rightTwice = true;
    } else {
      console.log("nope");
      state.formData.rightTwice = false;
    }
  },

  register(state) {
    if (state.formData.requirementsOk && state.formData.rightTwice) {
      console.log("register");
      state.isAuth = true;
    }
  },

  checkLoginEmail(state) {
    if (state.formData.loginEmail != state.loginData.userEmail) {
      console.log("worng email");
      state.loginData.emailRight = false;
    }
    if (state.formData.loginEmail == state.loginData.userEmail) {
      state.loginData.emailRight = true;
    }
  },

  checkLoginPassword(state) {
    if (state.formData.loginPassword != state.loginData.userPassword) {
      console.log("worng password");
      state.loginData.passwordRight = false;
    }
    if (state.formData.loginPassword == state.loginData.userPassword) {
      state.loginData.passwordRight = true;
    }
  },

  login(state) {
    if (state.loginData.emailRight && state.loginData.passwordRight) {
      console.log("nice both right");
      state.loginData.showError = false;
      state.isAuth = true;
    } else {
      console.log("nope");
      state.loginData.showError = true;
    }
  },

  logout(state) {
    state.isAuth = false;
  },
};
