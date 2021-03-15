<template>
  <van-skeleton title :row="10" :loading="loading">
    <van-grid :gutter="10" :column-num="3" clickable square>
      <van-grid-item
        icon="plus"
        @click="$router.push({ path: '/notes/add' })"
      />
      <van-grid-item
        v-for="list in lists"
        :key="list.id"
        icon="notes-o"
        :text="dealTime(list.time)"
        @click="$router.push({ path: '/notes/detail', query: { id: list.id } })"
      />
    </van-grid>
  </van-skeleton>
</template>
<script>
import { Grid, GridItem, Notify, Skeleton } from "vant";
import { init } from "@/api";
import { dealTime } from "@/utils/tools";
export default {
  components: { vanGrid: Grid, vanGridItem: GridItem, vanSkeleton: Skeleton },
  data() {
    return {
      loading: true,
      lists: [],
    };
  },
  computed: {},
  created() {
    this.handleInit();
  },
  methods: {
    dealTime,
    async handleInit() {
      let { data } = await init();
      this.loading = false;
      Notify({ type: "success", message: "刷新成功", duration: 800 });
      this.lists = data;
    },
  },
};
</script>