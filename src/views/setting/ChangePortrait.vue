<template>
  <van-uploader :after-read="afterRead">
    <van-button icon="plus" type="primary">上传文件</van-button>
  </van-uploader>
</template>
<script>
import { uploadHead } from "@/api";
import { Button, Uploader, Toast } from "vant";
export default {
  name: "修改头像",
  components: {
    vanUploader: Uploader,
    vanButton: Button,
  },
  methods: {
    async afterRead({ file }) {
      let formData = new FormData();
      formData.append("file", file);
      let { data } = await uploadHead(formData);
      console.log(data);
      if (data.code === "0") {
        this.$store.commit("setHead", data.data.url);
        Toast({
          message: data.msg,
          duration: 1000,
        });
        setTimeout(() => {
          this.$router.replace({ path: "/setting" });
        }, 1000);
      } else {
        Toast("修改失败");
      }
    },
  },
};
</script>