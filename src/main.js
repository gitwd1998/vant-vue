import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import i18n from './i18n'
// import { Locale } from "vant";
// import en from 'vant/es/locale/lang/en-US'
// Locale.use('en-US', en)
import VConsole from 'vconsole'
const vConsole = new VConsole()
Vue.use(vConsole)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
