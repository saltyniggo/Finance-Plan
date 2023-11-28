import axios from "axios";

async function putUser(payload) {
  try {
    const response = await axios({
      method: "put",
      url: `http://192.168.50.71/api/User`,
      data: {
        id: payload.userId,
        email: payload.email,
        password: payload.password,
        firstName: payload.firstName,
        lastName: payload.lastName,
      },
    });
    return response;
  } catch (error) {
    console.warn("Error when changing profile data: ", error);
    console.error("Error:", error);
    throw error;
  }
}

async function getLogin(emailInput, passwordInput) {
  try {
    const response = await axios({
      method: "get",
      url: `http://192.168.50.71/api/User/${emailInput}/${passwordInput}`,
    });
    return response;
  } catch (error) {
    console.warn("Error when checking login");
    console.error("Error:", error);
    throw error;
  }
}

async function postRegister(
  firstNameInput,
  lastNameInput,
  emailInput,
  passwordInput
) {
  try {
    const response = await axios({
      method: "post",
      url: `http://192.168.50.71/api/User`,
      data: {
        email: emailInput,
        password: passwordInput,
        firstName: firstNameInput,
        lastName: lastNameInput,
      },
    });
    return response;
  } catch (error) {
    console.warn("Error when posting register");
    console.error("Error:", error);
    throw error;
  }
}

async function deleteUser(userId) {
  try {
    const response = await axios({
      method: "delete",
      url: `http://192.168.50.71/api/User/${userId}`,
    });
    return response;
  } catch (error) {
    console.warn("Error when deleting User in DB");
    console.error("Error:", error);
    throw error;
  }
}

export default {
  getLogin,
  postRegister,
  putUser,
  deleteUser,
};
