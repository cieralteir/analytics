import Vue from "vue";
import App from "./App.vue";

import "@/plugins/buefy";
import router from "@/router";
import store from "@/store";

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  router,
  store,
}).$mount("#app");
