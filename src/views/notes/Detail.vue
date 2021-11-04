<template>
  <van-form colon :submit-on-enter="false">
    <van-filed label="时间" v-model="note.time" readonly></van-filed>
    <van-filed label="标题" v-model="note.title" readonly></van-filed>
    <van-filed
      readonly
      label="内容"
      v-model="note.content"
      rows="5"
      autosize
      type="textarea"
      maxlength="100"
      show-word-limit
    ></van-filed>
    <div class="van-cell">
      <van-button
        round
        block
        type="info"
        native-type="button"
        @click="$router.push({ path: '/notes/edit', query: { id } })"
        >编 辑</van-button
      >
    </div>
    <div class="van-cell">
      <van-button
        round
        block
        type="warning"
        native-type="button"
        @click="$router.go(-1)"
        >关闭</van-button
      >
    </div>
    <div class="van-cell">
      <van-button
        round
        block
        type="danger"
        native-type="button"
        @click="handleDelete"
        >删 除</van-button
      >
    </div>
  </van-form>
</template>
<script>
import { Button, Field, Dialog, Toast, Form } from "vant";
import { detail, deleteItem } from "@/api";
import { dealTime } from "@/utils/tools";
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
    this.handleInit();
  },
  methods: {
    async handleInit() {
      let data = await detail({ id: this.id });
      if (data.code === "0") {
        this.note = data.data;
        this.note.time = dealTime(data.data.time);
      } else {
        Toast("查看详情失败");
      }
    },
    handleDelete() {
      Dialog.confirm({
        title: "提示信息",
        message: "确定要删除当前日记吗？",
      })
        .then(async () => {
          const data = await deleteItem({ id: this.id });
          if (data.code === "0") {
            this.$router.go(-1);
            Toast({
              message: "data.msg",
              duration: 1000,
            });
          } else {
            Toast("删除失败");
          }
        })
        .catch(() => {
          Toast("取消删除");
        });
    },
  },
};
</script>