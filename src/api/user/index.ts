import request from "@/utils/request";
import type { loginForm, loginResponseData, userResponseData } from "./type";
// 统一接口管理

enum API {
  LOGIN_URL = "/api/user/login", // 登录接口
  USERINFO_URL = "/api/user/info", // 用户信息接口
}
// any:任意类型，不做检查
export const reqLogin = (data: loginForm) => {
  
  // <any, loginResponseData>表示请求参数可以是任意类型，返回参数必须是定义的类型
 return request.post<any, loginResponseData>(API.LOGIN_URL, data);
};

export const reqUserInfo = () => {
 return request.get<any, userResponseData>(API.USERINFO_URL);
};
