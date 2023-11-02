import { createStore } from "vuex";

import transactionModule from "./modules/transactions/index.js";
import registerModule from "./modules/register/index.js";
import userModule from "./modules/user";

const store = createStore({
  modules: {
    transactionList: transactionModule,
    registerModule: registerModule,
    userModule: userModule,
  },
  state() {
    return {
      backdropIsVisible: false,
    };
  },
});

export default store;
