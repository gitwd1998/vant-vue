<template>
  <div class="main-content">
    <van-cell title="选择单个日期" :label="date" @click="show = true" is-link />
    <van-calendar v-model="show" @confirm="handleConfirm" />
  </div>
</template>
<script>
import { Cell, Calendar } from "vant";
export default {
  components: { vanCell: Cell, vanCalendar: Calendar },
  data() {
    return {
      date: "",
      show: false,
    };
  },
  methods: {
    handleConfirm(date) {
      this.show = false;
      this.date = date.toString();
    },
  },
};
</script>