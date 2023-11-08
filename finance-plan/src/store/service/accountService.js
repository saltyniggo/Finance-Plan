import axios from "axios";

async function addAccount(accountNameInput) {
  try {
    const response = await axios({
      method: "post",
      url: `https://vmentvs05/api/Account`,
      headers: { "X-AIO-Key": "aio_kcGI202lAbtvIsWVhfyx21H8Kp6P" },
      data: {
        data: {
          accountName: accountNameInput,
        },
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
      headers: { "X-AIO-Key": "aio_kcGI202lAbtvIsWVhfyx21H8Kp6P" },
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
      url: `https://vmentvs05/api/Account/${accountId}`,
      headers: { "X-AIO-Key": "aio_kcGI202lAbtvIsWVhfyx21H8Kp6P" },
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
      url: `https://vmentvs05/api/Account/ByUserId/${userId}`,
      headers: { "X-AIO-Key": "aio_kcGI202lAbtvIsWVhfyx21H8Kp6P" },
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
