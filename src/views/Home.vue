<template>
  <div class="main-content">
    {{ $t("lang.en") }}
    <hr />
    {{ $t("lang.zh") }}
  </div>
</template>
<script>
export default {
  mounted() {
    // const ws = new WebSocket("ws://127.0.0.1:9000");
    // ws.onopen = (e) => {
    //   console.log(e);
    //   ws.send("hello WebSockets...");
    // };
    // ws.onmessage = (e) => {
    //   console.log(e);
    // };
    // ws.onclose = (e) => {
    //   console.log(e);
    // };
    // ws.onerror = (e) => {
    //   console.log(e);
    // };
  },
};
</script>