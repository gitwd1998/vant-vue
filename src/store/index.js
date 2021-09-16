import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: localStorage.getItem("token"),
    lang: localStorage.getItem('lang') || 'zh',
    username: "",
    phonenumber: "",
    avatar: "",
  },
  getters: {
    getLang(state) {
      return state.lang
    },
    getUserName(state) {
      return state.username
    },
    getPhoneNumber(state) {
      return state.phonenumber
    },
    getAvatar(state) {
      return state.avatar
    },
    getToken(state) {
      return state.token
    },
  },
  mutations: {
    setLang(state, lang) {
      state.lang = lang
    },
    setUserName(state, username) {
      state.username = username
    },
    setPhoneNumber(state, phonenumber) {
      state.phonenumber = phonenumber
    },
    setAvatar(state, avatar) {
      state.avatar = avatar
    },
    setToken(state, token) {
      state.token = token
    },
  },
  actions: {
  },
  modules: {
  }
})
