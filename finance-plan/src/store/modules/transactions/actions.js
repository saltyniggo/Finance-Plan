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
    await TransactionService.addTransaction(payload)
      .then((response) => {
        if (response == "successful") {
          console.log("addTransaction");
          const parts = payload.date.split("-");
          const [year, month, day] = parts.map(Number);
          payload.date = `${day.toString().padStart(2, "0")}.${month
            .toString()
            .padStart(2, "0")}.${year}`;
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
    await TransactionService.putTransactionEdit(payload)
      .then((response) => {
        if (response == "successful") {
          console.log("editTransaction");
          if (payload.date) {
            const parts = payload.date.split("-");
            const [year, month, day] = parts.map(Number);
            payload.date = `${day.toString().padStart(2, "0")}.${month
              .toString()
              .padStart(2, "0")}.${year}`;
          }
          const toEditIndex = context.rootState.popupModule.toEditIndex;
          context.commit("submitEdit", { payload, index: toEditIndex });
        } else if (response == "unsucessful") {
          console.error("ERROR");
        }
      })
      .catch((error) => {
        console.error("connection problem", error);
      });
  },

  async getTransactions({ commit }) {
    await TransactionService.getTransactions()
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
