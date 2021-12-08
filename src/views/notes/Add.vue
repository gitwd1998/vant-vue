<template>
  <div class="main-content">
    <van-form
      ref="form"
      colon
      :submit-on-enter="false"
      @submit="onSubmit"
      @failed="onFailed"
    >
      <van-field
        v-model="note.title"
        name="title"
        label="标题"
        placeholder="请填写标题"
        :rules="[{ required: true, message: '请填写标题' }]"
      ></van-field>
      <van-field
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
      ></van-field>
      <van-field
        name="photo"
        label="图片"
        :rules="[{ required: true, message: '请上传图片' }]"
      >
        <template #input>
          <van-uploader multiple v-model="note.phone"></van-uploader>
        </template>
      </van-field>
      <div class="van-cell">
        <van-button
          :disabled="disabledBtn"
          round
          block
          type="info"
          native-type="submit"
          >提交</van-button
        >
      </div>
      <div class="van-cell">
        <van-button
          :disabled="disabledBtn"
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
          :disabled="disabledBtn"
          round
          block
          type="danger"
          native-type="button"
          @click="$router.go(-1)"
          >取消</van-button
        >
      </div>
    </van-form>
  </div>
</template>
<script>
import { Button, Field, Form, Toast, Uploader } from "vant";
import { add, upload } from "@/api";
export default {
  components: {
    vanForm: Form,
    vanField: Field,
    vanButton: Button,
    vanUploader: Uploader,
  },
  data() {
    return {
      note: { title: "", content: "", photo: [] },
      disabledBtn: false,
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
      this.disabledBtn = true;
      let formData = new FormData();
      form.photo.forEach((v) => {
        formData.append(v.file.name, v.file);
      });
      let file = await upload(formData);
      console.log(file);
      let data = await add({
        title: form.title,
        content: form.content,
        time: new Date().getTime(),
      });
      if (data.code === "0") {
        Toast.success({
          message: data.msg,
          duration: 1000,
        });
        setTimeout(() => {
          this.$router.go(-1);
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