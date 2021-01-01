<template>
  <div id="app">
    <!-- 顶部导航 -->
    <van-nav-bar
      :title="activePage"
      placeholder
      border
      safe-area-inset-top
      fixed
      left-arrow
      @click-left="handleClickLeft"
      @click-right="showPopup = true"
    >
      <template #right><van-icon name="apps-o" /></template>
    </van-nav-bar>
    <!-- 主题内容 -->
    <div class="main">
      <router-view></router-view>
    </div>
    <!-- 底部导航 -->
    <van-tabbar v-model="activePage" placeholder route>
      <van-tabbar-item name="Home" icon="home-o" to="/" replace>
        Home
      </van-tabbar-item>
      <van-tabbar-item name="Friends" icon="friends-o" to="/Friends" replace>
        Friends
      </van-tabbar-item>
      <van-tabbar-item name="Setting" icon="setting-o" to="/Setting" replace>
        Setting
      </van-tabbar-item>
    </van-tabbar>
    <!-- 右侧弹出层 -->
    <van-popup
      round
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
            @click="(showPopup = false), (activePage = item.title)"
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
import popupContent from "./components.json";
export default {
  components: {
    vanNavBar: NavBar,
    vanTabbar: Tabbar,
    vanTabbarItem: TabbarItem,
    vanIcon: Icon,
    vanPopup: Popup,
    vanCell: Cell,
    vanCollapse: Collapse,
    vanCollapseItem: CollapseItem,
  },
  data() {
    return {
      activePage: "Home",
      showPopup: false,
      activeCollapse: [],
      popupContent,
    };
  },
  methods: {
    handleClickLeft() {
      this.$router.go(-1);
    },
  },
};
</script>
<style lang="less" scoped>
.main {
  padding: 10px;
}
</style>