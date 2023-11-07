import { createStore } from "vuex";

import transactionModule from "./modules/transactions/index.js";
import registerModule from "./modules/register/index.js";
import userModule from "./modules/user";
import accountsModule from "./modules/accounts/index.js";
import popupModule from "./modules/popup/index.js";
import axios from "./modules/axios/index.js";

const store = createStore({
  modules: {
    transactionList: transactionModule,
    registerModule: registerModule,
    userModule: userModule,
    accountsModule: accountsModule,
    popupModule: popupModule,
    axios: axios,
  },
  state() {
    return {
      backdropIsVisible: false,
    };
  },
});

export default store;

// const actions = {
//   async postFeed({commit}, payload) {
//       await service.postFeed(payload)
//           .then(response => commit('postFeed', { feed: payload, response: response}));
//   }
// }
