import { createStore } from "vuex";

import transactionModule from "./modules/transactions/index.js";
import registerModule from "./modules/register/index.js";
import userModule from "./modules/user";
import accountsModule from "./modules/accounts/index.js";
import popupModule from "./modules/popup/index.js";

const store = createStore({
  modules: {
    transactionModule: transactionModule,
    registerModule: registerModule,
    userModule: userModule,
    accountsModule: accountsModule,
    popupModule: popupModule,
  },
  state() {
    return {
      backdropIsVisible: false,
    };
  },
});

export default store;
