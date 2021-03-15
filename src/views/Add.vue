<template>
  <van-form @submit="handleSubmit">
    <van-filed
      label="标题"
      v-model="note.title"
      name="title"
      placeholder="请填写标题"
      :rules="[{ required: true, message: '请填写标题' }]"
    ></van-filed>
    <van-filed
      label="内容"
      v-model="note.content"
      name="content"
      rows="5"
      autosize
      type="textarea"
      maxlength="100"
      show-word-limit
      placeholder="请填写内容"
      :rules="[{ required: true, message: '请填写内容' }]"
    ></van-filed>
    <van-button round block type="info" native-type="submit">提交</van-button>
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
    async handleSubmit(form) {
      let { data } = await add({ ...form, time: new Date().getTime() });
      if (data.message) {
        Toast.success({ message: "添加成功", duration: 800 });
        this.$router.push("/notes/lists");
      }
    },
  },
};
</script>