// 对外暴露配置路由
export const constantRoutes =  [
    {
      // 登录
      path: "/login",
      component: () => import("@/views/login/index.vue"),
      name: "login",
    },
    {
      // 首页
      path: "/",
      component: () => import("@/views/home/index.vue"),
      name: "home",
    },
    {
      // 404
      path: "/404",
      component: () => import("@/views/404/index.vue"),
      name: "404",
    },
    {
        // 没有匹配上，重定向到404
        path:'/:pathMatch(.*)',
        redirect:'/404',
        name:'Any'
    }
  ]