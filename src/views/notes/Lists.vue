<template>
  <div class="">
    <van-sticky>
      <van-button
        key="edit"
        size="small"
        :icon="isSelect ? 'close' : 'edit'"
        @click="isSelect = !isSelect"
      />
      <van-button
        key="add"
        size="small"
        icon="add-o"
        @click="$router.push({ path: '/notes/add' })"
      />
      <van-button
        key="select"
        size="small"
        :icon="isAllSelected ? 'certificate' : 'circle'"
        v-if="isSelect"
        @click="selectAll"
      />
      <van-button
        key="delete"
        size="small"
        icon="delete-o"
        v-if="isSelect && selectedArr.length"
        @click="batchDelete"
      />
      <van-button
        key="view"
        :icon="isList ? 'orders-o' : 'apps-o'"
        size="small"
        @click="isList = !isList"
      />
      <van-button key="sequence" icon="descending" size="small" />
      <van-button key="uploade" icon="back-top" size="small" />
      <van-button key="download" icon="down" size="small" />
    </van-sticky>
    <van-skeleton title :row="10" :loading="isLoading">
      <van-cell-group v-if="isList">
        <van-cell
          v-for="item in noteList"
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
        <van-grid-item
          v-for="item in noteList"
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
    </van-skeleton>
  </div>
</template>
<script>
import { init, batchDelete } from "@/api";
import { dealTime } from "@/utils/tools";
import {
  Button,
  Cell,
  CellGroup,
  Grid,
  GridItem,
  Icon,
  Skeleton,
  Sticky,
  Toast,
  Dialog,
} from "vant";
export default {
  components: {
    vanGrid: Grid,
    vanGridItem: GridItem,
    vanSkeleton: Skeleton,
    vanCellGroup: CellGroup,
    vanCell: Cell,
    vanIcon: Icon,
    vanButton: Button,
    vanSticky: Sticky,
  },
  data() {
    return {
      isList: false,
      isLoading: true,
      showMore: false,
      noteList: [],
      isSelect: false,
      selectedArr: [],
    };
  },
  computed: {
    isAllSelected() {
      return this.noteList.length === this.selectedArr.length;
    },
  },
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
        this.noteList = data.data;
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
    selectAll() {
      this.selectedArr = this.isAllSelected
        ? []
        : this.noteList.map((v) => v.id);
    },
    batchDelete() {
      Dialog.confirm({
        title: "提示信息",
        message: "确定要删除这些日记吗？",
      })
        .then(async () => {
          const { data } = await batchDelete({ ids: this.selectedArr });
          if (data.code === "0") {
            Toast(data.msg);
            this.onInit();
          } else {
            Toast("删除失败");
          }
        })
        .catch(() => {
          Toast("取消删除");
        });
    },
  },
};
</script>
<style lang="less" scoped>
/deep/.van-sticky {
  margin-bottom: 10px;
  display: flex;
  justify-content: space-around;
  background: #fff;
  &.van-sticky--fixed {
    top: 46px;
  }
}
</style>