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
      @click-left="onClickLeft"
      @click-right="showPopup = true"
    >
      <template #right><van-icon name="apps-o" /></template>
    </van-nav-bar>
    <!-- 主题内容 -->
    <component :is="activePage"></component>
    <!-- 底部导航 -->
    <van-tabbar v-model="activePage">
      <van-tabbar-item name="home" icon="home-o">标签</van-tabbar-item>
      <van-tabbar-item name="friends" icon="friends-o">标签</van-tabbar-item>
      <van-tabbar-item name="setting" icon="setting-o">标签</van-tabbar-item>
    </van-tabbar>
    <!-- 弹出层 -->
    <van-popup
      round
      v-model="showPopup"
      position="right"
      :style="{ width: '240px', height: '100%' }"
    >
      <!-- 折叠面板 -->
      <van-collapse v-model="activeCollapse">
        <van-collapse-item title="基础组件" name="1">
          <van-cell title="Button" value="按钮" is-link to="" />
          <van-cell title="Cell" value="单元格" is-link to="" />
          <van-cell title="Icon" value="图标" is-link to="" />
          <van-cell title="Image" value="图片" is-link to="" />
          <van-cell title="Layout" value="布局" is-link to="" />
          <van-cell title="Popup" value="弹出层" is-link to="" />
          <van-cell title="Style" value="内置样式" is-link to="" />
          <van-cell title="Toast" value="轻提示" is-link to="" />
        </van-collapse-item>
        <van-collapse-item title="表单组件" name="2">
          <van-cell title="Calendar" value="日历" is-link to="" />
          <van-cell title="Cascader" value="级联选择" is-link to="" />
          <van-cell title="Checkbox" value="复选框" is-link to="" />
          <van-cell title="DatetimePicker" value="时间选择" is-link to="" />
          <van-cell title="Field" value="输入框" is-link to="" />
          <van-cell title="Form" value="表单" is-link to="" />
          <van-cell title="NumberKeyboard" value="数字键盘" is-link to="" />
          <van-cell title="PasswordInput" value="密码输入框" is-link to="" />
          <van-cell title="Picker" value="选择器" is-link to="" />
          <van-cell title="Radio" value="单选框" is-link to="" />
          <van-cell title="Rate" value="评分" is-link to="" />
          <van-cell title="Search" value="搜索" is-link to="" />
          <van-cell title="Slider" value="滑块" is-link to="" />
          <van-cell title="Stepper" value="步进器" is-link to="" />
          <van-cell title="Switch" value="开关" is-link to="" />
          <van-cell title="Uploader" value="文件上传" is-link to="" />
        </van-collapse-item>
        <van-collapse-item title="反馈组件" name="3">
          <van-cell title="ActionSheet" value="动作面板" is-link to="" />
          <van-cell title="Dialog" value="弹出框" is-link to="" />
          <van-cell title="DropdownMenu" value="下拉菜单" is-link to="" />
          <van-cell title="DatetimePicker" value="加载" is-link to="" />
          <van-cell title="Notify" value="消息通知" is-link to="" />
          <van-cell title="Overlay" value="遮罩层" is-link to="" />
          <van-cell title="PullRefresh" value="下拉刷新" is-link to="" />
          <van-cell title="ShareSheet" value="分享面板" is-link to="" />
          <van-cell title="SwipeCell" value="滑动单元格" is-link to="" />
        </van-collapse-item>
        <van-collapse-item title="展示组件" name="4">
          <van-cell title="Badge" value="徽标" is-link to="" />
          <van-cell title="Circle" value="环形进度条" is-link to="" />
          <van-cell title="Collapse" value="折叠面板" is-link to="" />
          <van-cell title="CountDown" value="倒计时" is-link to="" />
          <van-cell title="Divider" value="分割线" is-link to="" />
          <van-cell title="Empty" value="空状态" is-link to="" />
          <van-cell title="ImagePreview" value="图片预览" is-link to="" />
          <van-cell title="Lazyload" value="懒加载" is-link to="" />
          <van-cell title="List" value="列表" is-link to="" />
          <van-cell title="NoticeBar" value="通知栏" is-link to="" />
          <van-cell title="Popover" value="气泡弹出框" is-link to="" />
          <van-cell title="Progress" value="进度条" is-link to="" />
          <van-cell title="Skeleton" value="骨架屏" is-link to="" />
          <van-cell title="Steps" value="步骤条" is-link to="" />
          <van-cell title="Sticky" value="粘性布局" is-link to="" />
          <van-cell title="Swipe" value="轮播" is-link to="" />
          <van-cell title="Tag" value="标签" is-link to="" />
        </van-collapse-item>
        <van-collapse-item title="导航组件" name="5">
          <van-cell title="Grid" value="宫格" is-link to="" />
          <van-cell title="IndexBar" value="索引栏" is-link to="" />
          <van-cell title="NavBar" value="导航栏" is-link to="" />
          <van-cell title="Pagination" value="分页" is-link to="" />
          <van-cell title="Sidebar" value="侧边导航" is-link to="" />
          <van-cell title="Tab" value="标签页" is-link to="" />
          <van-cell title="Tabbar" value="标签栏" is-link to="" />
          <van-cell title="TreeSelect" value="分类选择" is-link to="" />
        </van-collapse-item>
        <van-collapse-item title="业务组件" name="6">
          <van-cell title="AddressEdit" value="地址编辑" is-link to="" />
          <van-cell title="AddressList" value="地址列表" is-link to="" />
          <van-cell title="Area" value="省市区选择" is-link to="" />
          <van-cell title="Card" value="商品卡片" is-link to="" />
          <van-cell title="ContactCard" value="联系人卡片" is-link to="" />
          <van-cell title="ContactEdit" value="联系人编辑" is-link to="" />
          <van-cell title="ContactList" value="联系人列表" is-link to="" />
          <van-cell title="Coupon" value="优惠券" is-link to="" />
          <van-cell title="GoodsAction" value="商品导航" is-link to="" />
          <van-cell title="SubmitBar" value="提交订单栏" is-link to="" />
          <van-cell title="Sku" value="商品规格" is-link to="" />
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
import home from "@/views/Home";
export default {
  components: {
    home,
    friends: () => import("@/views/Friends"),
    setting: () => import("@/views/Setting"),
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
      activePage: "home",
      showPopup: false,
      activeCollapse: [],
    };
  },
  methods: {
    onClickLeft() {},
  },
};
</script>
<style></style>