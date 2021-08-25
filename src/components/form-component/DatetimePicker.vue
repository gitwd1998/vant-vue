<template>
  <div class="main-content">
    <van-datetime-picker
      v-model="currentDate"
      type="date"
      title="选择年月日"
      :min-date="minDate"
      :max-date="maxDate"
    />
  </div>
</template>
<script>
import { DatetimePicker } from "vant";
export default {
  name: "时间选择",
  components: { vanDatetimePicker: DatetimePicker },
  data() {
    return {
      minDate: new Date(2020, 0, 1),
      maxDate: new Date(2025, 10, 1),
      currentDate: new Date(),
    };
  },
};
</script>