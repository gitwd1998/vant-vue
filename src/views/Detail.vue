<template>
  <div>
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
    <van-button
      round
      block
      type="primary"
      @click="$router.push({ path: '/notes/edit', query: { id } })"
      >编 辑</van-button
    >
    <van-button round block type="danger" @click="handleDelete"
      >删 除</van-button
    >
    <!-- <div>{{ note.time | dealTime }}</div> 过滤器的用法-->
  </div>
</template>
<script>
import { Button, Field, Dialog, Toast } from "vant";
import { detail, deleteItem } from "@/api";
import { dealTime } from "@/utils/tools";
export default {
  components: {
    vanFiled: Field,
    vanButton: Button,
  },
  filters: {
    dealTime: function (value) {
      return dealTime(value);
    },
  },
  data() {
    return {
      id: this.$route.query.id,
      note: {},
    };
  },
  created() {
    this.handleInit(this.id);
  },
  methods: {
    dealTime,
    async handleInit(id) {
      let { data } = await detail({ id });
      this.note = data;
      this.note.time = dealTime(data.time);
    },
    handleDelete() {
      Dialog.confirm({
        title: "提示信息",
        message: "确定要删除当前日记吗？",
      })
        .then(async () => {
          await deleteItem({ id: this.id });
          this.$router.push({ path: "/notes/lists" });
          Toast.success("删除成功");
        })
        .catch(() => {
          Toast.fail("取消删除");
        });
    },
  },
};
</script>
<style lang="less" scoped>
.van-button {
  margin-bottom: 20px;
}
</style>