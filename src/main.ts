import { createApp } from "vue";
// @ts-ignore  忽略ts语法检查
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import zhCn from "element-plus/es/locale/lang/zh-cn";
import App from "@/App.vue";
// 引入自定义插件，注册全局组件
import gloalComponent from "@/components";
// 全局样式
import "@/styles/index.scss";

const app = createApp(App);
app.use(gloalComponent);
app.use(ElementPlus, {
  locale: zhCn,
});
import "virtual:svg-icons-register";
app.mount("#app");
