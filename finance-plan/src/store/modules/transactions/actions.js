import TransactionService from "@/store/service/transactionService.js";

export default {
  async deleteTransaction({ commit }, transactionId) {
    await TransactionService.deleteTransaction(transactionId)
      .then((response) => {
        if (response.status === 200) {
          commit("deleteTransaction", transactionId);
        } else {
          console.error("delete not possible");
        }
      })
      .catch((error) => {
        console.error("connection problem", error);
      });
  },

  async addTransaction({ commit, dispatch }, payload) {
    const parts = payload.date.split("-");
    const [year, month, day] = parts.map(Number);
    payload.date = `${day.toString().padStart(2, "0")}.${month
      .toString()
      .padStart(2, "0")}.${year}`;
    payload.id = commit("getCategoryId", payload.id);
    await TransactionService.addTransaction(payload)
      .then((response) => {
        if (response.status === 200) {
          commit("addTransaction", payload);
          // commit("checktransactionModule");
          dispatch("getTransactions");
        } else {
          console.error("ERROR when adding transaction");
        }
      })
      .catch((error) => {
        console.error("connection problem", error);
      });
  },

  async editTransaction({ commit, rootState }, { payload }) {
    if (payload.date) {
      const parts = payload.date.split("-");
      const [year, month, day] = parts.map(Number);
      payload.date = `${day.toString().padStart(2, "0")}.${month
        .toString()
        .padStart(2, "0")}.${year}`;
    }

    payload.id = commit("getCategoryId", payload.id);
    const toEditId = rootState.popupModule.toEditId;
    payload.id = toEditId;
    await TransactionService.putTransactionEdit(payload)
      .then((response) => {
        if (response.status === 200) {
          commit("submitEdit", { payload, id: toEditId });
        } else {
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
        if (response.status === 200) {
          commit("setTransactions");
        } else {
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

  checktransactionModule({ commit }) {
    commit("checktransactionModule");
  },

  getCategoryId({ commit }, categoryName) {
    commit("getCategoryId", categoryName);
  },
};
