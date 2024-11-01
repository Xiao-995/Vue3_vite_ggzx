// 登录接口需要携带参数的类型
export interface loginForm {
  username: string;
  password: string;
}
// 登录接口返回数据类型
interface dataType {
  token: string;
}
export interface loginResponseData {
  code: number;
  data: dataType;
}

// 用户信息返回数据类型
interface userInfo {
  userId: number;
  avatar: string;
  username: string;
  password: string;
  desc: string;
  roles: string[];
  buttons: string[];
  routes: string[];
  token: string;
}
interface user {
  checkUser: userInfo;
}
export interface userResponseData {
  code: number;
  data: user;
}
