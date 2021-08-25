import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    lang: localStorage.getItem('lang') || 'zh',
    user: "",
    phone: "",
    head: "",
    token: localStorage.getItem("token"),
  },
  getters: {
    getLang(status) {
      return status.lang
    },
    getUser(status) {
      return status.user
    },
    getPhone(status) {
      return status.phone
    },
    getHead(status) {
      return status.head
    },
    getToken(status) {
      return status.token
    },
  },
  mutations: {
    setLang(status, lang) {
      status.lang = lang
    },
    setUser(status, user) {
      status.user = user
    },
    setPhone(status, phone) {
      status.phone = phone
    },
    setHead(status, head) {
      status.head = head
    },
    setToken(status, token) {
      status.token = token
    },
  },
  actions: {
  },
  modules: {
  }
})
