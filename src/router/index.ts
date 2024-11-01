import { createRouter, createWebHashHistory } from "vue-router";
import { constantRoutes } from "./router";
// 创建路由器
let router = createRouter({
  // 路由模式hash
  history: createWebHashHistory(),
  routes: constantRoutes,
  // 滚动行为
  scrollBehavior() {
    return { top: 0, left: 0 };
  },
});

export default router;
