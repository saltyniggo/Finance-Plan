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
};
