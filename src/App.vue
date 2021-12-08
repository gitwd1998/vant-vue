<template>
  <div id="app">
    <transition
      name="page"
      @before-enter="beforeEnter"
      @enter="enter"
      @after-enter="afterEnter"
      @before-leave="beforeLeave"
      @leave="leave"
      @after-leave="afterLeave"
    >
      <router-view />
    </transition>
  </div>
</template>
<script>
import { getUserInfo } from "@/api";
import { Toast } from "vant";
export default {
  data() {
    return {};
  },
  computed: {
    turn() {
      return this.$store.getters.getTurn;
    },
  },
  async created() {
    console.log("走app.vue页面");
    let token = this.$store.getters.getToken || "";
    if (token) {
      let data = await getUserInfo({ token });
      if (data.code === "0") {
        this.$store.commit("setUserName", data.data.username);
        this.$store.commit("setPhoneNumber", data.data.phonenumber);
        this.$store.commit("setAvatar", data.data.avatar);
      } else {
        Toast(data.msg || `${data.name}: ${data.message}`);
        localStorage.removeItem("token");
        this.$store.commit("setToken", "");
        this.$router.replace({ path: "/login" });
      }
    } else {
      Toast("获取token失败");
      this.$router.replace({ path: "/login" });
    }
  },
  methods: {
    beforeEnter(el) {
      if (this.turn === "go") el.style.transform = "translateX(100%)";
      if (this.turn === "back") el.style.transform = "translateX(-100px)";
      console.log("before-enter");
    },
    enter(el) {
      el.style.transform = "translateX(0)";
      console.log("enter");
    },
    afterEnter() {
      console.log("after-enter");
    },
    beforeLeave(el) {
      if (this.turn === "back") el.style.zIndex = 999;
      el.style.transform = "translateX(0)";
      console.log("before-leave");
    },
    leave(el) {
      if (this.turn === "go") el.style.transform = "translateX(-100px)";
      if (this.turn === "back") el.style.transform = "translateX(100%)";
      console.log("leave");
    },
    afterLeave() {
      console.log("after-leave");
    },
  },
};
</script>

<style lang="less">
#app {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  .layout {
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    position: absolute;
    box-shadow: #ccc 0 0 30px;
    .main {
      background: url("./assets/img/logo.png") center 10px no-repeat;
      background-size: 20%;
      overflow: auto;
      .main-content {
        padding: 10px;
        background: #fff;
      }
    }
  }
}
.page-enter,
.page-leave-to {
  opacity: 0;
}
.page-enter-active,
.page-leave-active {
  transition: all 0.5s;
}
.page-enter-to,
.page-leave {
  transform: translateX(0);
  opacity: 1;
}
</style>