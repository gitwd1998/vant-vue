<template>
  <div class="main-content">
    <van-tabs v-model="activeTab" swipeable sticky animated border>
      <van-tab title="热门">
        <grid-component />
      </van-tab>
      <van-tab title="同城">
        <grid-component />
      </van-tab>
      <van-tab title="榜单">
        <grid-component />
      </van-tab>
      <van-tab title="抗疫">
        <grid-component />
      </van-tab>
      <van-tab title="电影">
        <grid-component />
      </van-tab>
      <van-tab title="放映厅">
        <grid-component />
      </van-tab>
      <van-tab title="搞笑">
        <grid-component />
      </van-tab>
      <van-tab title="明星">
        <grid-component />
      </van-tab>
      <van-tab title="社会">
        <grid-component />
      </van-tab>
      <van-tab title="数码">
        <grid-component />
      </van-tab>
      <van-tab title="情感">
        <grid-component />
      </van-tab>
      <van-tab title="艺术">
        <grid-component />
      </van-tab>
      <van-tab title="电视剧">
        <grid-component />
      </van-tab>
      <van-tab title="体育">
        <grid-component />
      </van-tab>
    </van-tabs>
  </div>
</template>
<script>
import { Tab, Tabs } from "vant";
import Grid from "./Grid.vue";
export default {
  components: {
    gridComponent: Grid,
    vanTabs: Tabs,
    vanTab: Tab,
  },
  data() {
    return {
      activeTab: 0,
    };
  },
};
</script>
<style lang="less" scoped>
// 控制吸顶的高度
/deep/.van-sticky--fixed {
  top: 46px;
}
</style>