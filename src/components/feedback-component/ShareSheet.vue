<template>
  <div class="shareSheet">
    <van-cell title="显示分享面板" @click="show = true" is-link />
    <van-share-sheet
      v-model="show"
      title="立即分享给好友"
      :options="options"
      @select="handleSelect"
    />
  </div>
</template>
<script>
import { Cell, ShareSheet, Toast } from "vant";
export default {
  components: {
    vanCell: Cell,
    vanShareSheet: ShareSheet,
  },
  data() {
    return {
      show: false,
      options: [
        [
          { name: "微信", icon: "wechat" },
          { name: "微博", icon: "weibo" },
          { name: "QQ", icon: "qq" },
        ],
        [
          { name: "复制链接", icon: "link" },
          { name: "分享海报", icon: "poster" },
          { name: "二维码", icon: "qrcode" },
          { name: "小程序码", icon: "weapp-qrcode" },
        ],
      ],
    };
  },
  methods: {
    handleSelect(option) {
      Toast(option.name);
      this.show = false;
    },
  },
};
</script>
