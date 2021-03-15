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
    <!-- <div>{{ note.time | dealTime }}</div> 过滤器的用法-->
  </div>
</template>
<script>
import { Field } from "vant";
import { detail } from "@/api";
import { dealTime } from "@/utils/tools";
export default {
  components: {
    vanFiled: Field,
  },
  filters: {
    dealTime: function (value) {
      return dealTime(value);
    },
  },
  data() {
    return {
      id: this.$route.query.id,
      note: {
        title: "",
        content: "",
        time: "",
      },
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
  },
};
</script>