import { createApp } from "vue";
import App from "./App.vue";

import ButtonRound from "./components/base/ButtonRound.vue";
import ButtonRectangle from "./components/base/ButtonRectangle.vue";
import BackDrop from "./components/base/BackDrop.vue";
import BaseCard from "./components/base/BaseCard.vue";
import BaseForm from "./components/base/BaseForm.vue";

const app = createApp(App);

app.component("ButtonRound", ButtonRound);
app.component("ButtonRectangle", ButtonRectangle);
app.component("BackDrop", BackDrop);
app.component("BaseCard", BaseCard);
app.component("BaseForm", BaseForm);

app.mount("#app");
