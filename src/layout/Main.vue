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
      @click-right="showPopup = true"
    >
      <template #right><van-icon name="apps-o" /></template>
    </van-nav-bar>
    <!-- 主体内容 -->
    <div class="main">
      <router-view />
    </div>
    <!-- 底部导航 -->
    <van-tabbar placeholder route>
      <van-tabbar-item icon="home-o" to="/home" replace> HOME </van-tabbar-item>
      <van-tabbar-item icon="notes-o" to="/notes" replace>
        NOTES
      </van-tabbar-item>
      <van-tabbar-item icon="setting-o" to="/setting" replace>
        SETTING
      </van-tabbar-item>
    </van-tabbar>
    <!-- 右侧弹出层 -->
    <van-popup
      round
      closeable
      close-on-popstate
      close-on-click-overlay
      close-icon-position="top-left"
      v-model="showPopup"
      position="right"
      style="width: 270px; height: 100%"
    >
      <!-- 折叠面板 -->
      <van-cell title>
        <template #extra>
          <van-switch v-model="isAccordion" @change="onSwitch" />
        </template>
      </van-cell>
      <van-collapse v-model="activeCollapse" :accordion="isAccordion">
        <van-collapse-item
          v-for="(v, i) in popupContent"
          :key="i"
          :title="v.title"
          :name="i"
        >
          <van-cell
            v-for="item in v.item"
            :key="item.title"
            :title="item.title"
            :value="item.value"
            :to="item.to"
            @click="showPopup = false"
            is-link
          />
        </van-collapse-item>
      </van-collapse>
    </van-popup>
  </div>
</template>

<script>
import {
  NavBar,
  Tabbar,
  TabbarItem,
  Icon,
  Popup,
  Cell,
  Collapse,
  CollapseItem,
  Switch,
} from "vant";
import popupContent from "@/assets/components.json";
export default {
  components: {
    vanNavBar: NavBar,
    vanTabbar: Tabbar,
    vanTabbarItem: TabbarItem,
    vanIcon: Icon,
    vanPopup: Popup,
    vanCollapse: Collapse,
    vanCollapseItem: CollapseItem,
    vanCell: Cell,
    vanSwitch: Switch,
  },
  data() {
    return {
      showPopup: false,
      activeCollapse: [],
      popupContent,
      isAccordion: false,
    };
  },
  methods: {
    onSwitch(isAccordion) {
      this.activeCollapse = isAccordion ? "" : [];
    },
  },
};
</script>

<style lang="less" scoped>
.main {
  height: calc(100% - 46px - 50px);
}
</style>
