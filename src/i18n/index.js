import Vue from 'vue'
import VueI18n from 'vue-i18n'
import en from './lang/en'
import zh from './lang/zh'
// import { Locale } from "vant";
Vue.use(VueI18n)
const i18n = new VueI18n({
    locale: 'zh',
    messages: { en, zh, }
})

export default i18n