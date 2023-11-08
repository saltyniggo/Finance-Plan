export default {
  getUserId: (state) => state.userId,
  getFirstName: (state) => state.firstName,
  getLastName: (state) => state.lastName,
  getEmail: (state) => state.email,
  getPassword: (state) => state.password,
  getPasswordRequirements: (state) => state.passwordRequirements,
  getEditProfile: (state) => state.editProfile,
  getFullName: (state) => state.firstName + state.lastName,
  getUserId: (state) => state.userId,
};
