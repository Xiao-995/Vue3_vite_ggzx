import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
// @ts-ignore
import path from "path";
// https://vite.dev/config/
import { createSvgIconsPlugin } from "vite-plugin-svg-icons";
import { viteMockServe } from "vite-plugin-mock";

export default defineConfig(({ command }) => {
  return {
    plugins: [
      vue(),
      // svg图标
      createSvgIconsPlugin({
        // 指定缓存的图标文件夹
        iconDirs: [path.resolve(__dirname, "./src/assets/svg")],
      }),
      // mock插件
      viteMockServe({
        localEnabled: command === "serve",
      }),
    ],
    // @别名配置
    resolve: {
      alias: {
        "@": path.resolve("./src"),
      },
    },
    // css全局变量配置
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "./src/styles/variable.scss";', // 加载全局样式，使用scss特性
        },
      },
    },
  };
});
