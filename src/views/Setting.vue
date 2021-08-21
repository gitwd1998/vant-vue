<template>
  <div class="main-content">
    <van-cell-group>
      <van-cell title="头像" center icon="smile-o">
        <template #extra>
          <van-image
            width="50"
            height="50"
            round
            fit="cover"
            :src="require('@/assets/img/3.jpg')"
          />
        </template>
      </van-cell>
      <van-cell title="用户名" :value="username" icon="user-o" />
      <van-cell title="手机号码" :value="phone" icon="phone-o" />
      <van-cell title="退出登录" is-link @click="onExit" />
    </van-cell-group>
  </div>
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
      return this.$store.getters.getUser;
    },
    phone() {
      return this.$store.getters.getPhone;
    },
  },
  methods: {
    onExit() {
      Dialog.confirm({
        title: "提示信息",
        message: "确定要退出登录吗？",
      })
        .then(() => {
          localStorage.clear();
          this.$router.replace({ path: "/login" });
        })
        .catch(() => {});
    },
  },
};
</script>