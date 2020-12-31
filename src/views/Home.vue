<template>
  <div class="home">
    <van-button>按钮<van-icon name="chat-o" badge="999" /></van-button>
    <van-button @click="handleToast">轻提示</van-button>
    <van-button @click="showCalendar = true">弹出日历</van-button>
    <van-field v-model="fieldValue" label="文本" placeholder="请输入用户名" />
    <van-cell title="显示分享面板" @click="showShareSheet = true" />
    <van-cell
      title="显示数字键盘"
      @touchstart.native.stop="showNumberKeyboard = true"
    />
    <!-- 日历 -->
    <van-calendar v-model="showCalendar" @confirm="handleConfirm" />
    <!-- 数字键盘 -->
    <van-number-keyboard
      :show="showNumberKeyboard"
      @blur="showNumberKeyboard = false"
      @input="handleInput"
      @delete="handleDelete"
    />
    <!-- 分享面板 -->
    <van-share-sheet
      v-model="showShareSheet"
      title="立即分享给好友"
      :options="options"
      @select="handleSelect"
    />
    <!-- 滑动单元格 -->
    <van-swipe-cell>
      <template #left>
        <van-button square type="primary" text="选择" />
      </template>
      <van-cell :border="false" title="单元格" value="内容" />
      <template #right>
        <van-button square type="danger" text="删除" />
        <van-button square type="primary" text="收藏" />
      </template>
    </van-swipe-cell>
    <!-- 轮播图 -->
    <van-swipe :autoplay="3000" indicator-color="white">
      <van-swipe-item>1</van-swipe-item>
      <van-swipe-item>2</van-swipe-item>
      <van-swipe-item>3</van-swipe-item>
      <van-swipe-item>4</van-swipe-item>
    </van-swipe>
    <!-- 深色气泡弹出框 -->
    <van-popover
      v-model="showPopover"
      trigger="click"
      theme="dark"
      :actions="actions"
      @select="handleSelectPopover"
    >
      <template #reference>
        <van-button type="primary">浅色风格</van-button>
      </template>
    </van-popover>
    <!-- 分割线 -->
    <van-divider style="border-color: tomato">分割线</van-divider>
    <!-- 全局通知 -->
    <van-button @click="mainNotify">主要通知</van-button>
    <van-button @click="successNotify">成功通知</van-button>
    <van-button @click="dangerNotify">危险通知</van-button>
    <van-button @click="warnNotify">警告通知</van-button>
    <!-- tabbar -->
    <van-tabbar v-model="activePage" @change="handlePage">
      <van-tabbar-item icon="home-o">标签</van-tabbar-item>
      <van-tabbar-item icon="search">标签</van-tabbar-item>
      <van-tabbar-item icon="friends-o">标签</van-tabbar-item>
      <van-tabbar-item icon="setting-o">标签</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import {
  Cell,
  Button,
  Field,
  Icon,
  Toast,
  Calendar,
  ShareSheet,
  NumberKeyboard,
  SwipeCell,
  Popover,
  Swipe,
  SwipeItem,
  Notify,
  Divider,
  Tabbar,
  TabbarItem,
} from "vant";
export default {
  components: {
    "van-cell": Cell,
    "van-button": Button,
    "van-field": Field,
    "van-icon": Icon,
    "van-calendar": Calendar,
    "van-share-sheet": ShareSheet,
    "van-number-keyboard": NumberKeyboard,
    "van-swipe-cell": SwipeCell,
    "van-popover": Popover,
    "van-swipe": Swipe,
    "van-swipe-item": SwipeItem,
    "van-divider": Divider,
    "van-tabbar": Tabbar,
    "van-tabbar-item": TabbarItem,
  },
  data() {
    return {
      showPopup: false,
      showCalendar: false,
      showShareSheet: false,
      showNumberKeyboard: false,
      showPopover: false,
      activePage: 1,
      fieldValue: "",
      options: [
        [
          { name: "微信", icon: "wechat" },
          { name: "微博", icon: "weibo" },
          { name: "QQ", icon: "qq" },
        ],
        [
          { name: "复制链接", icon: "link" },
          { name: "分享海报", icon: "poster" },
          { name: "二维码", icon: "qrcode" },
          { name: "小程序码", icon: "weapp-qrcode" },
        ],
      ],
      actions: [{ text: "选项一" }, { text: "选项二" }, { text: "选项三" }],
    };
  },
  methods: {
    handleToast() {
      // Toast.success("提示内容");
      Toast.loading({ message: "loading...", forbidClick: true });
    },
    handleConfirm(d) {
      Toast.success(d.toString());
      this.showCalendar = false;
    },
    handleSelect(o) {
      Toast(`分享到${o.name}`);
      this.showShareSheet = false;
    },
    handleInput(v) {
      Toast(v);
    },
    handleDelete() {
      Toast("点击删除");
    },
    handleSelectPopover(a) {
      Toast(a.text);
    },
    mainNotify() {
      Notify({ type: "primary", message: "主要通知" });
    },
    successNotify() {
      Notify({ type: "success", message: "成功通知" });
    },
    dangerNotify() {
      Notify({ type: "danger", message: "危险通知" });
    },
    warnNotify() {
      Notify({ type: "warning", message: "警告通知" });
    },
    handlePage(i) {
      Toast.success(i);
    },
  },
};
</script>
<style lang="less" scoped>
.van-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  background-color: #39a9ed;
}
.home {
  height: 2000px;
}
</style>