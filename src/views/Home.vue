<template>
  <div>
    <van-button block>中文</van-button>
    <van-button block>英文</van-button>
    <div>刷新后页面标题和导航不一致</div>
    <div>刷新后获取不到$route.path</div>
    <div>中英文切换状态换一种效果</div>
    <div>暂时先把页面标题:title="activePage"换成:title="$route.path"</div>
    <div>生命周函数created和mounted的时候可能获取不到页面的路由</div>
  </div>
</template>
<script>
import { Button } from "vant";
export default {
  components: {
    vanButton: Button,
  },
};
</script>