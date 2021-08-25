import Vue from 'vue'
import store from '../store'
import VueI18n from 'vue-i18n'
import en from './lang/en'
import zh from './lang/zh'
Vue.use(VueI18n)
const i18n = new VueI18n({
    locale: store.getters.getLang,
    messages: { en, zh, }
})

export default i18n