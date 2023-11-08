import TransactionService from "@/store/service/transactionService.js";
export default {
  async deleteTransaction(context, accId) {
    await TransactionService.deleteTransaction(accId)
      .then((response) => {
        if (response == "successful") {
          console.log("delte");
          context.commit("deleteTransaction", accId);
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
          commit("TransactionModule/addTransaction", payload);
        } else if (response == "unsucessful") {
          console.error("ERROR");
        }
      })
      .catch((error) => {
        console.error("connection problem", error);
      });
  },

  async editTransaction({ commit }, { accId, edit }) {
    await TransactionService.putTransactionEdit(accId, edit)
      .then((response) => {
        if (response == "successful") {
          console.log("editTransaction");
          commit("editTransaction", { accId, edit });
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

  deleteTransaction(context, value) {
    context.commit("deleteTransaction", value);
  },
  addTransaction(context, packet) {
    const parts = packet.date.split("-");
    const [year, month, day] = parts.map(Number);
    packet.date = `${day.toString().padStart(2, "0")}.${month
      .toString()
      .padStart(2, "0")}.${year}`;
    context.commit("addTransaction", packet);
    context.commit("checkTransactionList");
  },
  submitEdit(context, packet) {
    if (packet.date) {
      const parts = packet.date.split("-");
      const [year, month, day] = parts.map(Number);
      packet.date = `${day.toString().padStart(2, "0")}.${month
        .toString()
        .padStart(2, "0")}.${year}`;
    }
    const toEditIndex = context.rootState.popupModule.toEditIndex;
    context.commit("submitEdit", { packet, index: toEditIndex });
  },
  checkTransactionList(context) {
    context.commit("checkTransactionList");
  },
};
