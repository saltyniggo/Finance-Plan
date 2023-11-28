import axios from "axios";

// // Request Interceptor
// axios.interceptors.request.use(
//   (config) => {
//     // Log information or perform actions before the request is sent
//     console.log("Request sent:", config);
//     return config;
//   },
//   (error) => {
//     // Handle errors during the request
//     console.error("Request error:", error);
//     return Promise.reject(error);
//   }
// );

// // Response Interceptor
// axios.interceptors.response.use(
//   (response) => {
//     // Log information or perform actions after a successful response
//     console.log("Response received:", response);
//     return response;
//   },
//   (error) => {
//     // Handle errors during the response
//     console.error("Response error:", error);
//     return Promise.reject(error);
//   }
// );

async function addAccount(accountNameInput) {
  console.log(accountNameInput);
  try {
    const response = await axios({
      method: "post",
      url: `http://192.168.50.71/api/Account`,
      data: {
        name: accountNameInput,
        accountBalance: 0,
        accountType: 0,
        userId: 2,
      },
    });
    return response;
  } catch (error) {
    console.warn("Error when adding account to user in DB:");
    console.error("Error:", error);
    throw error;
  }
}
async function deleteAccount(accountId) {
  try {
    const response = await axios({
      method: "delete",
      url: `https://io.adafruit.com/api/v2/angelos12345/feeds/${accountId}`,
    });
    return response;
  } catch (error) {
    console.warn("Error when deleting Account in DB");
    console.error("Error:", error);
    throw error;
  }
}

async function putAccountEdit(accountId, accountNameInput) {
  try {
    const response = await axios({
      method: "delete",
      url: `http://192.168.50.71/api/Account/${accountId}`,
      data: {
        accountId: accountId,
        accountNameInput,
      },
    });
    return response;
  } catch (error) {
    console.warn("Error when editing Account in DB");
    console.error("Error:", error);
    throw error;
  }
}

async function getAccounts(userId) {
  try {
    const response = await axios({
      method: "get",
      url: `http://192.168.50.71/api/Account/ByUserId/${userId}`,
    });
    return response;
  } catch (error) {
    console.warn("Error while getting accounts from the DB");
    console.error("Error:", error);
    throw error;
  }
}

export default {
  addAccount,
  deleteAccount,
  putAccountEdit,
  getAccounts,
};
