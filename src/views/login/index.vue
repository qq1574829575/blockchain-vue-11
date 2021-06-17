<template>
  <div class="login-container">
    <div style="display: flex;justify-content: center;margin-top: 25vh">
      <el-card style="width: 400px;">
        <div slot="header" class="clearfix">
          <span>登录</span>
        </div>
        <el-form ref="loginForm" v-loading="loading" :rules="loginRules" :model="loginForm" label-position="left">
          <el-form-item prop="username">
            <el-input v-model="loginForm.username" placeholder="账号" />
          </el-form-item>
          <el-form-item prop="password">
            <el-input
                v-model="loginForm.password"
                type="password"
                placeholder="密码"
                @keydown.enter.native="handleLogin"
            />
          </el-form-item>
          <el-form-item>
            <el-button
                style="width: 100%;"
                type="primary"
                @click="handleLogin"
            >登录</el-button>
          </el-form-item>
        </el-form>
      </el-card>
    </div>
  </div>
</template>

<script>

import router from "../../router";

export default {
  name: 'Login',
  data() {
    return {
      loginForm: {
        username: '123',
        password: '456'
      },
      loginRules: {
        username: [{ required: true, trigger: 'blur', message: '请输入账号' }],
        password: [{ required: true, trigger: 'blur', message: '请输入密码' }]
      },
      loading: false
    }
  },
  methods: {
    handleLogin() {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          this.loading = true
          setTimeout(()=> {
            this.loading = false
            if (this.loginForm.username === '123' && this.loginForm.password === '456'){
              this.$message({
                type: 'success',
                message: '登录成功'
              })
              router.push({ path: '/home' })
            } else {
              this.$message({
                type: 'error',
                message: '账号或密码错误'
              })
            }
          },1500)
        } else {
          return false
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.login-container {
  min-height: 100%;
  width: 100%;
  background-image: url("../../assets/bg.jpg");
  overflow: hidden;
  .div-form-item{
    margin-bottom: 10px;
  }
}
</style>
