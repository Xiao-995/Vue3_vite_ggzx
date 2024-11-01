import SvgIcon from "./SvgIcon/index.vue";

const allGloabl = { SvgIcon };
export default {
  install(app) {
    // 注册项目全部的全局组件
    Object.keys(allGloabl).forEach((item) => {
      app.component(item, allGloabl[item]);
    });
  },
};
