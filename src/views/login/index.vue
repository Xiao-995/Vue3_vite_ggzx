<template>
  <div class="login">
    <el-row>
      <el-col :span="12" :xs="4"></el-col>
      <el-col :span="12" :xs="20">
        <el-form
          :model="LoginForm"
          :rules="LoginRules"
          class="login_form"
          ref="loginFormRef"
        >
          <h1>hello</h1>
          <h2>欢迎来到硅谷甄选</h2>
          <el-form-item prop="username">
            <el-input v-model="LoginForm.username" :prefix-icon="User" />
          </el-form-item>
          <el-form-item prop="password">
            <el-input
              v-model="LoginForm.password"
              type="password"
              :prefix-icon="Lock"
              show-password
            />
          </el-form-item>
          <el-form-item>
            <el-button class="login_btn" type="primary" @click="Login"
              >登录</el-button
            >
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<script setup>
import { ref, reactive } from "vue";
import { User, Lock, View } from "@element-plus/icons-vue";
import { ElMessage } from "element-plus";
import { useRouter } from "vue-router";
// 引入用户仓库
import useUserStore from "@/store/modules/user";
let userStore = useUserStore();
// 获取路由
let $router = useRouter();
// 密码
let LoginForm = reactive({
  username: "admin",
  password: "111111",
});
let loginFormRef = ref();
// 自定义表单校验
const validatorUsername = (rule, value, callback) => {
  /* 
     rule 校验规则对象 
     value 输入框的值
     callback 校验函数
  */
  if (!value) {
    console.log(value);
    return callback(new Error("请输用户名"));
  } else {
    callback();
  }
  /*  if (/^\d{5,10}$/.test(value)) {
    callback();
  } else {
    return callback(new Error("请输入正确的用户名"));
  } */
};
const LoginRules = {
  username: [
    {
      validator: validatorUsername, // 表单自定义规则
      trigger: "blur",
    },
  ],
  password: [
    {
      required: true,
      message: "请输入密码",
      trigger: "blur",
    },
    {
      min: 6,
      message: "密码长度最少为6位",
      trigger: "blur",
    },
  ],
};
// 登录
const Login = async () => {
  await loginFormRef.value.validate();
  userStore
    .userLogin(LoginForm)
    .then((res) => {
      $router.push("/");
      ElMessage({
        message: "登录成功",
        type: "success",
        duration: 1000,
      });
    })
    .catch((erros) => {
      ElMessage({
        message: erros,
        type: "error",
        duration: 1000,
      });
    });
};
</script>

<style lang="scss" scoped>
.login {
  width: 100%;
  height: 100vh;
  background: url("@/assets/images/login-bg.jpg") no-repeat;
  background-size: cover;
  .login_form {
    position: relative;
    width: 80%;
    top: 30vh;
    background: url("@/assets/images/login_form.png") no-repeat;
    // 把背景图片放大到适合元素容器的尺寸，图片比例不变
    background-size: cover;
    padding: 40px;
    h1 {
      color: white;
      font-size: 40px;
    }
    h2 {
      color: white;
      font-size: 20px;
      margin: 20px 0;
    }
    .login_btn {
      width: 100%;
    }
  }
}
</style>
