import { createApp } from "vue";
import axios from "axios";
import VueAxios from "vue-axios";

import App from "./App.vue";
import store from "./store/index.js";
import router from "./router.js";

import ButtonRound from "./components/base/ButtonRound.vue";
import ButtonRectangle from "./components/base/ButtonRectangle.vue";
import BackDrop from "./components/base/BackDrop.vue";
import BaseCard from "./components/base/BaseCard.vue";
import BaseForm from "./components/base/BaseForm.vue";
import BaseInput from "./components/base/BaseInput.vue";

const app = createApp(App);

app.use(VueAxios, axios);

app.component("ButtonRound", ButtonRound);
app.component("ButtonRectangle", ButtonRectangle);
app.component("BackDrop", BackDrop);
app.component("BaseCard", BaseCard);
app.component("BaseForm", BaseForm);
app.component("BaseInput", BaseInput);

app.use(store);
app.use(router);

app.mount("#app");
