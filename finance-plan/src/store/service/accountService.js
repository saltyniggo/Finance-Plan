import axios from "axios";

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
  deleteAccount,
};
