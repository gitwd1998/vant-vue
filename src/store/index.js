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
    turn: "",
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
    getTurn(state) {
      return state.turn
    }
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
    logout(state) {
      state.token = ""
      state.username = ""
      state.phonenumber = ""
      state.avatar = ""
    },
    setTurn(state, turn) {
      state.turn = turn
    }
  },
  actions: {
  },
  modules: {
  }
})
