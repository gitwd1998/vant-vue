<template>
  <div>
    <van-img :src="require('../assets/img/3.jpg')" />
  </div>
</template>
<script>
import { Image } from "vant";
export default {
  components: {
    vanImg: Image,
  },
};
</script>