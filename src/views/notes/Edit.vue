<template>
  <van-form
    ref="form"
    colon
    :submit-on-enter="false"
    @submit="onSubmit"
    @failed="onFailed"
  >
    <van-filed
      v-model="note.title"
      name="title"
      label="标题"
      placeholder="请填写标题"
      :rules="[{ required: true, message: '请填写标题' }]"
    ></van-filed>
    <van-filed
      v-model="note.content"
      name="content"
      label="内容"
      rows="5"
      autosize
      type="textarea"
      maxlength="100"
      show-word-limit
      placeholder="请填写内容"
      :rules="[{ required: true, message: '请填写内容' }]"
    ></van-filed>
    <div class="van-cell">
      <van-button round block type="info" native-type="submit">提交</van-button>
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
        type="danger"
        native-type="button"
        @click="$router.go(-1)"
        >取消</van-button
      >
    </div>
  </van-form>
</template>
<script>
import { Button, Field, Form, Toast } from "vant";
import { detail, edit } from "@/api";
export default {
  components: {
    vanForm: Form,
    vanFiled: Field,
    vanButton: Button,
  },
  data() {
    return {
      id: this.$route.query.id,
      note: {},
    };
  },
  created() {
    this.getDetial();
  },
  methods: {
    async getDetial() {
      let data = await detail({ id: this.id });
      if (data.code === "0") {
        this.note = data.data;
        console.log(this.note);
      } else {
        Toast("查看详情失败");
      }
    },
    onFailed(rules) {
      for (const rule of rules.errors) {
        Toast(rule.message);
        break;
      }
    },
    async onSubmit() {
      let data = await edit({ ...this.note });
      if (data.code === "0") {
        Toast({
          message: data.msg,
          duration: 1000,
        });
        setTimeout(() => {
          this.$router.replace({
            path: "/notes/detail",
            query: { id: this.id },
          });
        }, 1000);
      } else {
        Toast("编辑失败");
      }
    },
    onReset() {
      this.$refs.form.resetValidation();
      this.note = { title: "", content: "", time: "" };
    },
  },
};
</script>