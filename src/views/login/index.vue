<template>
  <div class="container">
    <el-form ref="loginForm"
      :model="form"
      class="login-form"
      label-width="80px"
      :rules="rules">
      <div class="title">会员管理系统</div>
      <el-form-item label="用户名"
        class="login-username"
        prop="username">
        <el-input v-model="form.username"></el-input>
      </el-form-item>
      <el-form-item label="密码"
        prop="password">
        <el-input v-model="form.password"
          show-password></el-input>
      </el-form-item>
      <el-form-item>
        <el-button class="reset"
          @click="reset"
          type="plain">重置</el-button>
        <el-button class="login"
          @click="onSubmit"
          type="primary">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { login, getUserInfo } from "@/api/login";
export default {
  data() {
    const validateUserName = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("用户名不能为空"));
      }
      callback();
    };
    const validatePassWord = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("密码不能为空"));
      }
      callback();
    };
    return {
      form: {
        username: "abc",
        password: "123",
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: ""
      },
      rules: {
        username: [{ validator: validateUserName, trigger: "blur" }],
        password: [{ validator: validatePassWord, trigger: "blur" }]
      }
    };
  },
  methods: {
    onSubmit() {
      this.$refs["loginForm"].validate(async valid => {
        console.log(valid, "valid");
        if (valid) {
          let res = await login(this.form.username, this.form.password);
          console.log(res)
          if (res.data.flag) {
            let data = res.data.data;
            localStorage.setItem("login-token", data.token);
            this._getUserInfo();
          } else {
            return this.$message.error('登录失败!');;
          }
        } else {
          return this.$message.error('用户名或密码错误!');;
        }
      });
    },
    async _getUserInfo() {
      let res = await getUserInfo();
      if (res.data.flag) {
        let data = res.data.data;
        localStorage.setItem("login-user", JSON.stringify(data.name));
        this.$router.push('/')
      }
    },
    reset() {
      this.$refs["loginForm"].resetFields();
    }
  }
};
</script>

<style scoped style="scss">
.container {
  position: absolute;
  width: 100%;
  height: 100%;
  background: url("../../assets/img/login.jpg");
}
.title {
  text-align: center;
  font-size: 20px;
  font-weight: 300;
  padding: 0px 0 16px 0;
}
.login-form {
  width: 350px;
  margin: 180px auto;
  /* border: 1px solid #000; */
  padding: 20px 50px 20px 13px;
  background-color: rgb(21, 20, 22);
  border-radius: 20px;
  opacity: 0.8;
}

/deep/ .login {
  float: right;
  margin-right: 16px;
}
/deep/ .reset {
  float: right;
}

/* .login-username /deep/ .el-form-item__label{
  color:red
} */
</style>