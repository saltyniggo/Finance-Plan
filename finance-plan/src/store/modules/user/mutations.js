export default {
  setUser(state, payload) {
    state.firstName = payload.data.data.firstName;
    state.lastName = payload.data.data.lastName;
    state.email = payload.data.data.email;
    state.password = payload.data.data.password;
    state.userId = payload.data.data.id;
  },
  toggleEditProfile(state) {
    state.editProfile = !state.editProfile;
  },
  updateUserData(state, { newFirst, newLast, newEmail }) {
    state.firstName = newFirst;
    state.lastName = newLast;
    state.email = newEmail;
  },
  updatePassword(state, newPassword) {
    state.password = newPassword;
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
      state.passwordRequirements.requirementsOk = true;
    } else {
      state.passwordRequirements.requirementsOk = false;
    }
  },
  deleteUser(state) {
    state.firstName = undefined;
    state.lastName = undefined;
    state.email = undefined;
    state.password = undefined;
    state.accounts = undefined;
    state.userId = undefined;
  },
  setRequestStatus(state, payload) {
    state.requestStatus = payload;
  },
};
