<template>
  <div class="main-content">
    <van-uploader :after-read="afterRead" />
  </div>
</template>
<script>
import { Uploader } from "vant";
export default {
  components: { vanUploader: Uploader },
  methods: {
    afterRead(file) {
      // 此时可以自行将文件上传至服务器
      console.log(file);
    },
  },
};
</script>