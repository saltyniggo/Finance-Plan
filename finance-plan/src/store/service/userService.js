// function GetUser() {
//   axios({
//     method: "get",
//     url: "https://io.adafruit.com/api/v2/angelos12345/feeds/neuem-feed",
//     header: { "X-AIO-Key": "aio_ATvt86DqcWbpaSzzrWlKyIqvy8P5" },
//   }).then(function (response) {
//     console.log(response);
//     return response;
//   });
// }

// export default {
//   GetUser,
// };

import axios from "axios";

async function putUser(
  firstNameInput = undefined,
  lastNameInput = undefined,
  emailInput = undefined,
  passwordInput = undefined
) {
  try {
    console.log(firstNameInput, lastNameInput, emailInput, passwordInput);
    const response = await axios({
      method: "put",
      url: "https://io.adafruit.com/api/v2/angelos12345/feeds/",
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
    console.error("Error when changing profile data: ", error);
    throw error;
  }
}

async function postLogin(emailInput, passwordInput) {
  try {
    const response = await axios({
      method: "post",
      url: "https://io.adafruit.com/api/v2/angelos12345/feeds/",
      headers: { "X-AIO-Key": "aio_kcGI202lAbtvIsWVhfyx21H8Kp6P" },
      data: {
        email: emailInput,
        password: passwordInput,
      },
    });
    return response;
  } catch (error) {
    console.log("Error when posting login");
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
      url: "https://io.adafruit.com/api/v2/angelos12345/feeds/",
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
    console.log("Error when posting register");
    console.error("Error:", error);
    throw error;
  }
}

export default {
  postLogin,
  postRegister,
  putUser,
};
