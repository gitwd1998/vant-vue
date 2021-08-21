<template>
  <van-skeleton title :row="10" :loading="isLoading">
    <div>
      <van-cell-group v-if="isList">
        <van-cell icon="ellipsis" title is-link @click="showMore = true" />
        <van-cell
          v-for="item in lists"
          :key="item.id"
          :title="item.title"
          icon="notes-o"
          :value="dealTime(item.time)"
          @click="isSelect ? handleSelect(item) : toDetail(item)"
        >
          <template #right-icon>
            <van-icon
              v-if="isSelect"
              :name="selectedArr.includes(item.id) ? 'certificate' : 'circle'"
              :color="selectedArr.includes(item.id) ? '#1989fa' : '#7d7e80'"
              class="van-cell__right-icon"
            />
          </template>
        </van-cell>
      </van-cell-group>
      <van-grid
        v-else
        :gutter="10"
        :column-num="3"
        :clickable="!isSelect"
        square
      >
        <van-grid-item icon="ellipsis" @click="showMore = true" />
        <van-grid-item
          v-for="item in lists"
          :key="item.id"
          @click="isSelect ? handleSelect(item) : toDetail(item)"
        >
          <template #default>
            <van-icon
              v-if="isSelect"
              :name="selectedArr.includes(item.id) ? 'certificate' : 'circle'"
              style="position: absolute; left: 10px; top: 10px"
              :color="selectedArr.includes(item.id) ? '#1989fa' : '#7d7e80'"
            />
            <van-icon name="notes-o" class="van-grid-item__icon" />
            <span class="van-grid-item__text">{{ item.title }}</span>
          </template>
        </van-grid-item>
      </van-grid>
      <van-popup
        round
        close-on-popstate
        close-on-click-overlay
        v-model="showMore"
        position="left"
      >
        <van-cell-group>
          <van-cell icon="close" @click="showMore = false" />
          <van-cell icon="add-o" to="/notes/add" />
          <van-cell
            icon="orders-o"
            @click="(isList = true), (showMore = false)"
          />
          <van-cell icon="apps-o" @click="showMore = isList = false" />
          <van-cell
            icon="more-o"
            @click="(isSelect = true), (showMore = false)"
          />
        </van-cell-group>
      </van-popup>
    </div>
  </van-skeleton>
</template>
<script>
import { init } from "@/api";
import { dealTime } from "@/utils/tools";
import {
  Cell,
  CellGroup,
  Grid,
  GridItem,
  Icon,
  Popup,
  Skeleton,
  Toast,
} from "vant";
export default {
  components: {
    vanGrid: Grid,
    vanGridItem: GridItem,
    vanSkeleton: Skeleton,
    vanCellGroup: CellGroup,
    vanCell: Cell,
    vanPopup: Popup,
    vanIcon: Icon,
  },
  data() {
    return {
      isList: false,
      isLoading: true,
      showMore: false,
      lists: [],
      isSelect: false,
      selectedArr: [],
    };
  },
  computed: {},
  created() {
    this.onInit();
  },
  methods: {
    dealTime,
    async onInit() {
      let { data } = await init();
      this.isLoading = false;
      if (data.code === "0") {
        Toast(data.msg);
        this.lists = data.data;
      } else {
        Toast("获取数据失败");
      }
    },
    toDetail(item) {
      this.$router.push({ path: "/notes/detail", query: { id: item.id } });
    },
    handleSelect(item) {
      let index = this.selectedArr.findIndex((v) => v === item.id);
      if (index < 0) return this.selectedArr.push(item.id);
      this.selectedArr.splice(index, 1);
    },
  },
};
</script>