<template>
  <div class="regist">
    <div class="title">注 册</div>
    <van-form
      ref="form"
      colon
      validate-first
      :submit-on-enter="false"
      @submit="onRegist"
      @failed="onFailed"
    >
      <van-field
        v-model.trim="form.username"
        name="user"
        label="用户名"
        placeholder="请输入用户名"
        :rules="[{ pattern: rules.checkUsername, message: '请输入合法用户名' }]"
      />
      <van-field
        v-model="form.phone"
        name="phone"
        label="手机号"
        placeholder="请输入手机号"
        :rules="[{ pattern: rules.checkPhone, message: '请输入合法手机号' }]"
      />
      <van-field
        v-model="form.password"
        name="pass"
        label="密码"
        placeholder="请输入密码"
        :rules="[{ pattern: rules.checkPassword, message: '请输入合法密码' }]"
      />
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
          @click="toLogin"
          >登录</van-button
        >
      </div>
    </van-form>
  </div>
</template>
<script>
import { regist } from "@/api";
import { Button, Field, Form, Toast } from "vant";
export default {
  name: "注册",
  components: {
    vanForm: Form,
    vanField: Field,
    vanButton: Button,
  },
  data() {
    return {
      form: {
        username: "",
        password: "",
        captchatext: "",
      },
      rules: {
        checkUsername: /^.{1,4}$/,
        checkPhone: /^1[3-9]\d{9}$/,
        checkPassword: /^\w{4,8}$/,
      },
    };
  },
  created() {},
  methods: {
    async onRegist(form) {
      Toast.loading({
        message: "等待...",
        forbidClick: true,
      });
      const { data } = await regist(form);
      Toast.clear();
      if (data.code === "0") {
        Toast({
          message: data.msg,
          duration: 1000,
        });
        setTimeout(() => {
          this.$router.replace({ path: "/login" });
        }, 1000);
      } else {
        Toast(data.msg);
        this.$refs.form.resetValidation();
        this.form = { username: "", phone: "", password: "" };
      }
    },
    onReset() {
      this.$refs.form.resetValidation();
      this.form = { username: "", phone: "", password: "" };
    },
    onFailed(rules) {
      for (const rule of rules.errors) {
        Toast(rule.message);
        break;
      }
    },
    toLogin() {
      this.$router.replace({ path: "/login" });
    },
  },
};
</script>
<style lang="less" scoped>
.regist {
  padding: 40px 10px;
  text-align: center;
  .title {
    font: 30px/3 "";
    color: #ccc;
  }
}
</style>