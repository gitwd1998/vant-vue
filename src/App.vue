<template>
  <div id="app">
    <!-- 顶部导航 -->
    <van-nav-bar
      :title="$route.path.substr(1)"
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
    <!-- 主题内容 -->
    <div class="main" style="padding: 10px">
      <router-view></router-view>
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
      close-icon-position="top-left"
      v-model="showPopup"
      position="right"
      :style="{ width: '270px', height: '100%' }"
    >
      <!-- 折叠面板 -->
      <van-collapse v-model="activeCollapse">
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
} from "vant";
import popupContent from "./assets/components.json";
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
  },
  data() {
    return {
      showPopup: false,
      activeCollapse: [],
      popupContent,
    };
  },
  methods: {},
};
</script>
<style lang="less" scoped>
.van-collapse {
  margin-top: 44px;
}
</style>