import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: localStorage.getItem("user"),
    phone: localStorage.getItem("phone"),
    head: localStorage.getItem("head"),
    token: localStorage.getItem("token"),
    timestamp: localStorage.getItem("timestamp"),
  },
  getters: {
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
    getTimestamp(status) {
      return status.timestamp
    },
  },
  mutations: {
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
    setTimestamp(status, timestamp) {
      status.timestamp = timestamp
    },
  },
  actions: {
  },
  modules: {
  }
})
