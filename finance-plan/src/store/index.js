import { createStore } from "vuex";
import transactionModule from "./modules/transactions/index.js";
import registerModule from "./modules/register/index.js";

const store = createStore({
  modules: {
    transactionList: transactionModule,
    registerModule: registerModule,
  },
  state() {
    return {};
  },
});

export default store;
