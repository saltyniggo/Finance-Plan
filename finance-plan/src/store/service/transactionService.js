import axios from "axios";

async function addTransaction(payload) {
  try {
    const response = await axios({
      method: "post",
      url: `http://192.168.50.71/api/Transaction`,
      data: {
        amount: payload.amount,
        transactionType: payload.category,
        date: payload.date,
        description: payload.description,
      },
    });
    return response;
  } catch (error) {
    console.warn("Error when adding Transaction to user in DB:");
    throw error;
  }
}
async function deleteTransaction(transactionId) {
  const encodedTransactionId = encodeURIComponent(transactionId);
  try {
    const response = await axios({
      method: "delete",
      url: `https://io.adafruit.com/api/v2/angelos12345/feeds/${encodedTransactionId}`,
    });
    return response;
  } catch (error) {
    console.warn("error when deleting transaction in DB");
    throw error;
  }
}

async function putTransactionEdit(payload, transactionId) {
  const encodedTransactionId = encodeURIComponent(transactionId);
  try {
    const response = await axios({
      method: "put",
      url: `http://192.168.50.71/api/Transaction/${encodedTransactionId}`,
      data: {
        id: payload.id,
        amount: payload.amount,
        transactionType: payload.transactionType,
        date: payload.date,
        description: payload.description,
      },
    });
    return response;
  } catch (error) {
    console.warn("Error when editing Transaction in DB");
    throw error;
  }
}

async function getTransactions(accountId) {
  const encodedAccountId = encodeURIComponent(accountId);
  try {
    const response = await axios({
      method: "get",
      url: `http://192.168.50.71/api/Transaction/TransactionsByAccount/${encodedAccountId}`,
    });
    return response;
  } catch (error) {
    console.warn("Error when getting transactions by account in DB");
    throw error;
  }
}

export default {
  addTransaction,
  deleteTransaction,
  putTransactionEdit,
  getTransactions,
};
