import axios from "axios";

async function addTransaction(payload) {
  try {
    const response = await axios({
      method: "post",
      url: `https://vmentvs05/api/Transaction`,
      headers: { "X-AIO-Key": "aio_kcGI202lAbtvIsWVhfyx21H8Kp6P" },
      data: {
        data: {
          date: payload.date,
          amount: payload.amount,
          description: payload.description,
          category: payload.category,
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
      url: `https://io.adafruit.com/api/v2/angelos12345/feeds/${transactionId}`,
      headers: { "X-AIO-Key": "aio_kcGI202lAbtvIsWVhfyx21H8Kp6P" },
    });
    return response;
  } catch (error) {
    console.error("error when deleting transaction in DB");
    console.error("Error:", error);
    throw error;
  }
}

async function putTransactionEdit(payload, transactionId) {
  try {
    const response = await axios({
      method: "delete",
      url: `https://vmentvs05/api/Transaction/${transactionId}`,
      headers: { "X-AIO-Key": "aio_kcGI202lAbtvIsWVhfyx21H8Kp6P" },
      data: {
        date: payload.date,
        amount: payload.amount,
        description: payload.description,
        category: payload.category,
        index: payload.index,
      },
    });
    return response;
  } catch (error) {
    console.log("Error when editing Transaction in DB");
    console.error("Error:", error);
    throw error;
  }
}

async function getTransactions(accountId) {
  try {
    const response = await axios({
      method: "get",
      url: `https://vmentvs05/api/Transaction/TransactionsByAccount/${accountId}`,
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
