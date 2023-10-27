import { createStore } from "vuex";

import transactionModule from "./modules/transactions/index.js";
import registerModule from "./modules/register/index.js";
import userModule from "./modules/user";
import loginModule from "./modules/login";

const store = createStore({
  modules: {
    transactionList: transactionModule,
    registerModule: registerModule,
    userModule: userModule,
    loginModule: loginModule,
  },
  state() {
    return {};
  },
});

export default store;
