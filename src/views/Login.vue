<template>
  <div class="layout login">
    <div class="title">登 录</div>
    <van-form
      ref="form"
      colon
      validate-first
      :submit-on-enter="false"
      @submit="onLogin"
      @failed="onFailed"
    >
      <van-field
        autocomplete="off"
        v-model="form.username"
        name="username"
        label="用户名"
        placeholder="请输入用户名"
        :rules="[{ pattern: rules.checkUsername, message: '请输入用户名' }]"
      />
      <van-field
        autocomplete="off"
        v-model="form.password"
        name="password"
        label="密码"
        placeholder="请输入密码"
        :rules="[{ pattern: rules.checkPassword, message: '请输入密码' }]"
      />
      <van-field
        autocomplete="off"
        v-model="form.captchatext"
        name="captchatext"
        label="验证码"
        placeholder="请输入验证码"
        :rules="[{ required: true, message: '请输入验证码' }]"
      >
        <template #extra>
          <div v-html="captchaImg" @click="getCaptcha" />
        </template>
      </van-field>
      <div class="van-cell">
        <van-button round block type="info" native-type="submit"
          >提交</van-button
        >
      </div>
      <div class="van-cell">
        <van-button
          round
          block
          type="warning"
          native-type="button"
          @click="onReset"
          >重置</van-button
        >
      </div>
      <div class="van-cell">
        <van-button
          round
          block
          type="primary"
          native-type="button"
          @click="toRegist"
          >注册</van-button
        >
      </div>
    </van-form>
  </div>
</template>
<script>
import { captcha, login, getUserInfo } from "@/api";
import { Button, Field, Form, Toast } from "vant";
export default {
  components: {
    vanForm: Form,
    vanField: Field,
    vanButton: Button,
  },
  data() {
    return {
      captchaImg: "",
      form: {
        username: "",
        password: "",
        captchatext: "",
      },
      rules: {
        checkUsername: /^.{1,4}$/,
        checkPassword: /^\w{4,8}$/,
      },
    };
  },
  created() {
    this.getCaptcha();
  },
  methods: {
    async getCaptcha() {
      const data = await captcha();
      if (data.code === "0") {
        this.captchaImg = data.data;
      } else {
        Toast("获取验证码失败");
      }
    },
    async onLogin(form) {
      Toast.loading({
        message: "等待...",
        forbidClick: true,
      });
      const data = await login(form);
      Toast.clear();
      if (data.code === "0") {
        localStorage.setItem("token", data.data);
        this.$store.commit("setToken", data.data);
        getUserInfo({ token: data.data }).then((res) => {
          if (res.code === "0") {
            this.$store.commit("setUserName", res.data.username);
            this.$store.commit("setPhoneNumber", res.data.phonenumber);
            this.$store.commit("setAvatar", res.data.avatar);
          } else {
            Toast(res.msg || `${res.name}: ${res.message}`);
            localStorage.removeItem("token");
            this.$store.commit("setToken", "");
            this.$router.replace({ path: "/login" });
          }
        });
        Toast({
          message: data.msg,
          duration: 1000,
        });
        setTimeout(() => {
          this.$router.replace({ path: "/layout" });
        }, 1000);
      } else {
        Toast(data.msg || data.message);
        this.$refs.form.resetValidation();
        this.form = { username: "", password: "", captchatext: "" };
        this.getCaptcha();
      }
    },
    onReset() {
      this.$refs.form.resetValidation();
      this.form = { username: "", password: "", captchatext: "" };
    },
    onFailed(rules) {
      console.log(rules);
      for (const rule of rules.errors) {
        Toast(rule.message);
        break;
      }
    },
    toRegist() {
      this.$router.replace({ path: "/regist" });
    },
  },
};
</script>
<style lang="less" scoped>
.login {
  padding: 40px 10px;
  text-align: center;
  background: url("../assets/img/bg.jpg") center center no-repeat;
  background-size: 100% 100%;
  div {
    background: unset;
  }
  .title {
    font: 30px/3 "";
    color: #ccc;
  }
}
</style>