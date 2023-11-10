import axios from "axios";

async function addAccount(accountNameInput) {
  try {
    const response = await axios({
      method: "post",
      url: `http://192.168.50.71/api/Account`,
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
