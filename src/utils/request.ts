// 进行axios二次封装
import axios from "axios";

// 1. 创建axios实例
let request = axios.create({
  baseURL: "",
  timeout: 5000,
});

// 2. 添加请求拦截器
request.interceptors.request.use((config) => {
  // 返回配置对象
  return config;
});

// 3. 响应拦截器
request.interceptors.response.use(
  (response) => {
    // 成功回调
    return response.data;
  },
  (error) => {
    return console.error(error.message);
  }
);
export default request;
