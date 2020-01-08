/* eslint-disable no-unused-vars */
import Vue from "vue";
import App from "./App.vue";
// router路由
import VueRouter from "vue-router";
import router from "./router/index.js";
// resource
import resource from "vue-resource";

// 安装使用(vue-router vue-resource)
Vue.use(VueRouter);
Vue.use(resource);

// mint-ui
import { Header, Swipe, SwipeItem } from "mint-ui";
Vue.component(Header.name, Header);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
import "../src/mui/mui-master/dist/css/mui.min.css";
import "../src/mui/mui-master/examples/hello-mui/css/icons-extra.css";
import "mint-ui/lib/style.css";

Vue.config.productionTip = false;

var vm = new Vue({
  render: h => h(App),
  // 挂载router
  router
}).$mount("#app");
