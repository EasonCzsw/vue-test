import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// mint-ui
import { Header } from "mint-ui";
Vue.component(Header.name, Header);
import "../src/mui/mui-master/dist/css/mui.min.css";
import "../src/mui/mui-master/examples/hello-mui/css/icons-extra.css";
import "mint-ui/lib/style.css";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
