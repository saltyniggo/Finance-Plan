import { createStore } from "vuex";
import transactionModule from "./modules/transactions/index.js";

const store = createStore({
  modules: {
    transactionList: transactionModule,
  },
  state() {
    return {};
  },
});

export default store;
