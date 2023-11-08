import axios from "axios";

async function putUser(payload) {
  try {
    const response = await axios({
      method: "put",
      url: `https://vmentvs05/api/User/${payload.userId}`,
      headers: { "X-AIO-Key": "aio_kcGI202lAbtvIsWVhfyx21H8Kp6P" },
      data: {
        firstName: payload.firstName,
        lastName: payload.lastNamet,
        email: payload.email,
        password: payload.password,
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
      url: `https://vmentvs05/api/User/${emailInput}/${passwordInput}`,
      headers: { "X-AIO-Key": "aio_kcGI202lAbtvIsWVhfyx21H8Kp6P" },
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
      url: `https://vmentvs05/api/User`,
      headers: { "X-AIO-Key": "aio_kcGI202lAbtvIsWVhfyx21H8Kp6P" },
      data: {
        firstName: firstNameInput,
        lastName: lastNameInput,
        email: emailInput,
        password: passwordInput,
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
      url: `https://vmentvs05/api/User/${userId}`,
      headers: { "X-AIO-Key": "aio_kcGI202lAbtvIsWVhfyx21H8Kp6P" },
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
