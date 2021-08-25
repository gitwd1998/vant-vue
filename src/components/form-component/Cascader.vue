<template>
  <div class="main-content">
    <van-field
      v-model="fieldValue"
      is-link
      readonly
      label="地区"
      placeholder="请选择所在地区"
      @click="show = true"
    />
    <van-popup v-model="show" round position="bottom">
      <van-cascader
        v-model="cascaderValue"
        title="请选择所在地区"
        :options="options"
        @close="show = false"
        @finish="onFinish"
      />
    </van-popup>
  </div>
</template>
<script>
import { Cascader, Field, Popup } from "vant";
export default {
  name: "级联选择",
  components: { vanCascader: Cascader, vanField: Field, vanPopup: Popup },
  data() {
    return {
      show: false,
      fieldValue: "",
      cascaderValue: "",
      options: [
        {
          text: "北京市",
          value: "北京市",
          children: [
            { text: "东城区", value: "东城区" },
            { text: "西城区", value: "西城区" },
            { text: "崇文区", value: "东城区" },
            { text: "朝阳区", value: "东城区" },
          ],
        },
        {
          text: "安徽省",
          value: "安徽省",
          children: [
            { text: "合肥市", value: "合肥市" },
            { text: "芜湖市", value: "芜湖市" },
            { text: "蚌埠市", value: "蚌埠市" },
            {
              text: "宿州市",
              value: "宿州市",
              children: [
                { text: "埇桥区", value: "埇桥区" },
                { text: "萧县", value: "东城区" },
                { text: "泗县", value: "泗县" },
                { text: "砀山县", value: "东城区" },
                { text: "其他", value: "其他" },
              ],
            },
          ],
        },
        {
          text: "其他",
          value: "其他",
        },
      ],
    };
  },
  methods: {
    onFinish({ selectedOptions }) {
      this.show = false;
      this.fieldValue = selectedOptions.map((option) => option.text).join("/");
    },
  },
};
</script>