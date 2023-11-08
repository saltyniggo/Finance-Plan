import TransactionService from "@/store/service/transactionService.js";
export default {
  async deleteTransaction(context, value) {
    await TransactionService.deleteTransaction(value)
      .then((response) => {
        if (response == "successful") {
          console.log("delte");
          context.commit("deleteTransaction", value);
        } else if (response == "unsuccessful") {
          console.log("delete not possible");
        }
      })
      .catch((error) => {
        console.log("conenction problem", error);
      });
  },

  async addTransaction({ commit }, payload) {
    const parts = payload.date.split("-");
    const [year, month, day] = parts.map(Number);
    payload.date = `${day.toString().padStart(2, "0")}.${month
      .toString()
      .padStart(2, "0")}.${year}`;
    await TransactionService.addTransaction(payload)
      .then((response) => {
        if (response == "successful") {
          console.log("addTransaction");
          commit("addTransaction", payload);
          commit("checkTransactionList");
        } else if (response == "unsucessful") {
          console.error("ERROR");
        }
      })
      .catch((error) => {
        console.error("connection problem", error);
      });
  },

  async editTransaction(context, { payload }) {
    if (payload.date) {
      const parts = payload.date.split("-");
      const [year, month, day] = parts.map(Number);
      payload.date = `${day.toString().padStart(2, "0")}.${month
        .toString()
        .padStart(2, "0")}.${year}`;
    }
    const toEditIndex = context.rootState.popupModule.toEditIndex;
    payload.index = toEditIndex;
    await TransactionService.putTransactionEdit(payload)
      .then((response) => {
        if (response == "successful") {
          console.log("editTransaction");
          context.commit("submitEdit", { payload, index: toEditIndex });
        } else if (response == "unsucessful") {
          console.error("ERROR");
        }
      })
      .catch((error) => {
        console.error("connection problem", error);
      });
  },

  async getTransactions({ commit }, accountId) {
    await TransactionService.getTransactions(accountId)
      .then((response) => {
        if (response == "successful") {
          console.log("editTransaction");
          commit("setTransactions");
        } else if (response == "unsucessful") {
          console.error("ERROR");
        }
      })
      .catch((error) => {
        console.error("connection problem", error);
      });
  },

  checkTransactionList(context) {
    context.commit("checkTransactionList");
  },
};
