import { createApp } from "vue";
import App from "./App.vue";

import ButtonRound from "./components/header/ButtonRound.vue";
import ButtonRectangle from "./components/shortcuts/ButtonRectangle.vue";

const app = createApp(App);

app.component("ButtonRound", ButtonRound);
app.component("ButtonRectangle", ButtonRectangle);

app.mount("#app");
