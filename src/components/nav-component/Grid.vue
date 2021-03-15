<template>
  <div class="grid">
    <van-grid>
      <van-grid-item icon="photo-o" text="文字" />
      <van-grid-item icon="photo-o" text="文字" />
      <van-grid-item icon="photo-o" text="文字" />
      <van-grid-item icon="photo-o" text="文字" />
    </van-grid>
    <!-- 自定义列数栅格 -->
    <van-grid :column-num="3">
      <van-grid-item
        v-for="value in 6"
        :key="value"
        icon="photo-o"
        text="文字"
      />
    </van-grid>
    <!-- 自定义内容栅格 -->
    <van-grid :border="false" :column-num="3">
      <van-grid-item>
        <van-image :src="require('../../assets/img/1.jpg')" />
      </van-grid-item>
      <van-grid-item>
        <van-image :src="require('../../assets/img/2.jpg')" />
      </van-grid-item>
      <van-grid-item>
        <van-image :src="require('../../assets/img/3.jpg')" />
      </van-grid-item>
    </van-grid>
    <!-- 正方形栅格 -->
    <van-grid square>
      <van-grid-item
        v-for="value in 8"
        :key="value"
        icon="photo-o"
        text="文字"
      />
    </van-grid>
    <!-- 栅格间距 -->
    <van-grid :gutter="10">
      <van-grid-item
        v-for="value in 8"
        :key="value"
        icon="photo-o"
        text="文字"
      />
    </van-grid>
    <!-- 内容横排 -->
    <van-grid direction="horizontal" :column-num="3">
      <van-grid-item icon="photo-o" text="文字" />
      <van-grid-item icon="photo-o" text="文字" />
      <van-grid-item icon="photo-o" text="文字" />
    </van-grid>
  </div>
</template>
<script>
import { Grid, GridItem, Image } from "vant";
export default {
  components: { vanGrid: Grid, vanGridItem: GridItem, vanImage: Image },
};
</script>