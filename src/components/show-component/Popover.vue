<template>
  <div class="main-content">
    <van-popover
      v-model="showPopover"
      trigger="click"
      theme="dark"
      :actions="actions"
      @select="handleSelect"
    >
      <template #reference>
        <van-button type="primary">深色风格</van-button>
      </template>
    </van-popover>
  </div>
</template>
<script>
import { Button, Popover } from "vant";
export default {
  name: "气泡弹出框",
  components: { vanButton: Button, vanPopover: Popover },
  data() {
    return {
      showPopover: false,
      actions: [
        { text: "选项一", id: 1 },
        { text: "选项二", id: 2 },
        { text: "选项三", id: 3 },
        { text: "选项四", id: 4 },
      ],
    };
  },
  methods: {
    handleSelect(value, index) {
      console.log(value, index);
    },
  },
};
</script>