import TransactionService from "@/store/service/transactionService.js";
export default {
  async deleteTransaction(context, transactionId) {
    await TransactionService.deleteTransaction(transactionId)
      .then((response) => {
        if (response == "successful") {
          context.commit("deleteTransaction", transactionId);
        } else if (response == "unsuccessful") {
          console.error("delete not possible");
        }
      })
      .catch((error) => {
        console.error("connection problem", error);
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
          commit("addTransaction", payload);
          commit("checktransactionModule");
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
    const toEditId = context.rootState.popupModule.toEditId;
    payload.id = toEditId;
    await TransactionService.putTransactionEdit(payload)
      .then((response) => {
        if (response == "successful") {
          context.commit("submitEdit", { payload, id: toEditId });
        } else if (response == "unsucessful") {
          console.error("ERROR");
        }
      })
      .catch((error) => {
        console.error("connection problem", error);
      });
  },

  async getTransactions({ commit }, accountId) {
    let data = undefined;
    await TransactionService.getTransactions(accountId)
      .then((response) => {
        if (response == "successful") {
          commit("setTransactions");
        } else if (response == "unsucessful") {
          console.error("ERROR");
        }

        data = response;
      })
      .catch((error) => {
        console.error("connection problem", error);
        data = error;
      });

    return data;
  },

  checktransactionModule(context) {
    context.commit("checktransactionModule");
  },
};
