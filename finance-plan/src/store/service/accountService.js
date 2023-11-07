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

export default {
  addAccount,
};
