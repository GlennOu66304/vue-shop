import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import axios from "axios";
import store from "./store";

import { Lazyload } from "vant";
import { NavBar } from 'vant';


// options 为可选参数，无则不传
Vue.use(Lazyload);
Vue.use(NavBar);
Vue.prototype.$axios = axios;

Vue.config.productionTip = false;

new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount("#app");
