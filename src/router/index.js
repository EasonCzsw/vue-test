import VueRouter from "vue-router";

// 导入对应的路由组建
import Home from "../components/tabar/homeContainer.vue";
import Member from "../components/tabar/memberContainer.vue";
import Shopcar from "../components/tabar/shopcarContainer.vue";
import Search from "../components/tabar/searchContainer.vue";

const router = new VueRouter({
  routes: [
    // 配置路由规则
    { path: "/", redirect: "/home" }, // 初识默认高亮
    { path: "/home", component: Home },
    { path: "/member", component: Member },
    { path: "/shopcar", component: Shopcar },
    { path: "/search", component: Search }
  ],
  linkActiveClass: "mui-active" // 覆盖默认路由高亮类
});

export default router;
