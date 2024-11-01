import { defineStore } from "pinia";
import type { loginForm, loginResponseData } from "@/api/user/type";
import type { UserState } from "@/store/modules/types/typs";
import {SET_TOKEN,GET_TOKEN} from '@/utils/token'
// 接口
import { reqLogin } from "@/api/user";
// 用户小仓库
let useUserStore = defineStore("User", {
  // 存储数据
  state: ():UserState => {
    return {
      token: GET_TOKEN(), // 用户唯一标识token
    };
  },
  //  异步|逻辑
  actions: {
    // 用户登录的方法
    async userLogin(data: loginForm) {
      // 登录请求
      let result: loginResponseData = await reqLogin(data);
      // 登录成功-->token
      if (result.code === 200) {
        // pinia仓库存储token
        this.token = (result.data.token as string);
        // 本地存储token
        SET_TOKEN(result.data.token as string)
        return "ok";
      } else {
        return Promise.reject(new Error(result.data.message));
      }
    },
  },
  getters: {},
});

export default useUserStore;
