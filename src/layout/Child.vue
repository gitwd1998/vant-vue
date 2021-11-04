<template>
  <div class="layout">
    <!-- 顶部导航 -->
    <van-nav-bar
      :title="$route.name"
      placeholder
      border
      safe-area-inset-top
      fixed
      left-arrow
      @click-left="$router.go(-1)"
    />
    <!-- 主体内容 -->
    <div class="main">
      <router-view />
    </div>
  </div>
</template>

<script>
import { NavBar } from "vant";
export default {
  components: {
    vanNavBar: NavBar,
  },
};
</script>

<style lang="less" scoped>
.main {
  height: calc(100% - 46px);
}
</style>
