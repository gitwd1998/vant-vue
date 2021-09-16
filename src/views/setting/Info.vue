<template>
  <van-cell-group>
    <van-cell
      title="头像"
      center
      icon="smile-o"
      @click="$router.push({ path: '/setting/changePortrait' })"
    >
      <template #extra>
        <van-image
          width="50"
          height="50"
          round
          fit="cover"
          :src="require('@/assets/img/logo.png')"
        />
      </template>
    </van-cell>
    <van-cell title="用户名" :value="username" icon="user-o" />
    <van-cell title="手机号码" :value="phonenumber" icon="phone-o" />
    <van-cell
      title="修改密码"
      is-link
      @click="$router.push({ path: '/setting/changePassword' })"
    />
    <van-cell title="退出登录" is-link @click="onExit" />
    <div>{{ avatar }}</div>
    <img style="width: 100px" :src="avatar" alt="" />
  </van-cell-group>
</template>
<script>
import { Cell, CellGroup, Image, Dialog } from "vant";
export default {
  components: {
    vanCellGroup: CellGroup,
    vanCell: Cell,
    vanImage: Image,
  },
  data() {
    return {};
  },
  computed: {
    username() {
      return this.$store.getters.getUserName;
    },
    phonenumber() {
      return this.$store.getters.getPhoneNumber;
    },
    avatar() {
      return this.$store.getters.getAvatar;
    },
  },
  methods: {
    onExit() {
      Dialog.confirm({
        title: "提示信息",
        message: "确定要退出登录吗？",
      })
        .then(() => {
          localStorage.removeItem("token");
          this.$router.replace({ path: "/login" });
        })
        .catch(() => {});
    },
  },
};
</script>