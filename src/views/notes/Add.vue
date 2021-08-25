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
import { add } from "@/api";
export default {
  components: {
    vanForm: Form,
    vanFiled: Field,
    vanButton: Button,
  },
  data() {
    return {
      note: { title: "", content: "" },
    };
  },
  methods: {
    onFailed(rules) {
      for (const rule of rules.errors) {
        Toast(rule.message);
        break;
      }
    },
    async onSubmit(form) {
      let { data } = await add({ ...form, time: new Date().getTime() });
      if (data.code === "0") {
        Toast.success({
          message: data.msg,
          duration: 1000,
        });
        setTimeout(() => {
          this.$router.replace("/notes/lists");
        }, 1000);
      }
    },
    onReset() {
      this.$refs.form.resetValidation();
      this.note = { title: "", content: "" };
    },
  },
};
</script>