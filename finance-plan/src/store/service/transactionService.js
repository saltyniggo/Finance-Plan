import axios from "axios";

async function addTransaction(transactionNameInput) {
  try {
    const response = await axios({
      method: "post",
      url: "https://io.adafruit.com/api/v2/angelos12345/feeds/",
      headers: { "X-AIO-Key": "aio_kcGI202lAbtvIsWVhfyx21H8Kp6P" },
      data: {
        data: {
          transactionName: transactionNameInput,
        },
      },
    });
    return response;
  } catch (error) {
    console.error("Error when adding Transaction to user in DB:", error);
    throw error;
  }
}
async function deleteTransaction(transactionId) {
  try {
    const response = await axios({
      method: "delete",
      url: "https://io.adafruit.com/api/v2/angelos12345/feeds/",
      // url: `https://io.adafruit.com/api/v2/angelos12345/feeds/${TransactionId}`,
      headers: { "X-AIO-Key": "aio_kcGI202lAbtvIsWVhfyx21H8Kp6P" },
      data: {
        transactionId: transactionId,
      },
    });
    return response;
  } catch (error) {
    console.log("Error when deleting Transaction in DB");
    console.error("Error:", error);
    throw error;
  }
}

async function putTransactionEdit(transactionId, transactionNameInput) {
  try {
    const response = await axios({
      method: "delete",
      url: "https://io.adafruit.com/api/v2/angelos12345/feeds/",
      headers: { "X-AIO-Key": "aio_kcGI202lAbtvIsWVhfyx21H8Kp6P" },
      data: {
        transactionId: transactionId,
        transactionNameInput,
      },
    });
    return response;
  } catch (error) {
    console.log("Error when editing Transaction in DB");
    console.error("Error:", error);
    throw error;
  }
}

async function getTransactions() {
  try {
    const response = await axios({
      method: "get",
      url: "https://io.adafruit.com/api/v2/angelos12345/feeds/",
      headers: { "X-AIO-Key": "aio_kcGI202lAbtvIsWVhfyx21H8Kp6P" },
    });
    return response;
  } catch (error) {
    console.log("Error when editing Transaction in DB");
    console.error("Error:", error);
    throw error;
  }
}

export default {
  addTransaction,
  deleteTransaction,
  putTransactionEdit,
  getTransactions,
};
