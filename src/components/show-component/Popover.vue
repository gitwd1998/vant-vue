<template>
  <div class="popover">
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
  components: { vanButton: Button, vanPopover: Popover },
  data() {
    return {
      showPopover: false,
      actions: [
        { text: "选项一" },
        { text: "选项二" },
        { text: "选项三" },
        { text: "选项四" },
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