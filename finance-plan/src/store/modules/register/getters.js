export default {
  getFormData(state) {
    return state.formData;
  },
  inputValue: (state) => (field) => {
    return state.formData[field];
  },

  getPassword(state) {
    return state.formData.password;
  },
  getPasswordRepeat(state) {
    return state.formData.passwordRepeat;
  },

  rightTwice(state) {
    return state.formData.rightTwice;
  },

  requirementsOK(state) {
    return state.formData.requirementsOk;
  },
};
