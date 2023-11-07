import axios from "axios";

async function addAccount(accountNameInput) {
  try {
    const response = await axios({
      method: "post",
      url: "https://io.adafruit.com/api/v2/angelos12345/feeds/",
      headers: { "X-AIO-Key": "aio_kcGI202lAbtvIsWVhfyx21H8Kp6P" },
      data: {
        data: {
          accountName: accountNameInput,
        },
      },
    });
    return response;
  } catch (error) {
    console.error("Error when adding account to user:", error);
    throw error;
  }
}
async function deleteAccount(accountId) {
  try {
    const response = await axios({
      method: "delete",
      url: "https://io.adafruit.com/api/v2/angelos12345/feeds/",
      headers: { "X-AIO-Key": "aio_kcGI202lAbtvIsWVhfyx21H8Kp6P" },
      data: {
        accountId: accountId,
      },
    });
    return response;
  } catch (error) {
    console.log("Error when deleting Account in DB");
    console.error("Error:", error);
    throw error;
  }
}

export default {
  addAccount,
  deleteAccount,
};
