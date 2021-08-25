<template>
  <div class="msin-content">
    <van-cell is-link title="显示动作面板" @click="show = true" />
    <van-action-sheet
      v-model="show"
      :actions="actions"
      cancel-text="取消"
      description="该动作面板的描述信息"
      close-on-click-action
      @cancel="handleCancel"
      @select="handleSelect"
    />
  </div>
</template>
<script>
import { ActionSheet, Cell, Toast } from "vant";
export default {
  components: {
    vanActionSheet: ActionSheet,
    vanCell: Cell,
  },
  data() {
    return {
      show: false,
      actions: [
        { name: "选项一", subname: "描述信息" },
        { name: "选项二" },
        { name: "选项三" },
      ],
    };
  },
  methods: {
    handleSelect(item) {
      Toast(item.name);
    },
    handleCancel() {
      Toast("取消");
    },
  },
};
</script>