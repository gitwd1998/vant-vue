<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
import { getUserInfo } from "@/api";
import { Toast } from "vant";
export default {
  data() {
    return {};
  },
  async created() {
    let token = this.$store.getters.getToken || "";
    if (token) {
      let data = await getUserInfo({ token });
      if (data.code === "0") {
        this.$store.commit("setUserName", data.data.username);
        this.$store.commit("setPhoneNumber", data.data.phonenumber);
        this.$store.commit("setAvatar", data.data.avatar);
      } else {
        Toast(data.msg || `${data.name}: ${data.message}`);
        localStorage.removeItem("token");
        this.$router.replace({ path: "/login" });
      }
    } else {
      Toast("获取token失败");
      this.$router.replace({ path: "/login" });
    }
  },
};
</script>