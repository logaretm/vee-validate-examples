// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import VeeValidate from "vee-validate";
import App from "./App";
import "bulma/css/bulma.min.css";
import store from "./store";
import router from "./router";

Vue.use(VeeValidate, {
  validity: true
});

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  router,
  store,
  el: "#app",
  components: { App },
  render: h => h(App)
});
