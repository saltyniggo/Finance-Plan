export default {
  toggleEditProfile(state) {
    state.editProfile = !state.editProfile;
  },
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
};