import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', component: Home },
  { path: '/user', component: () => import('../views/User.vue') },
  { path: '/setting', component: () => import('../views/Setting.vue') },
  { path: '/button', component: () => import('../components/base-component/Button.vue') },
  { path: '/calendar', component: () => import('../components/form-component/Calendar.vue') },
  { path: '/shareSheet', component: () => import('../components/feedback-component/ShareSheet.vue') },
  { path: '/grid', component: () => import('../components/nav-component/Grid.vue') },
  { path: '/cascader', component: () => import('../components/form-component/Cascader.vue') },
  { path: '/datetimePicker', component: () => import('../components/form-component/DatetimePicker.vue') },
  { path: '/uploader', component: () => import('../components/form-component/Uploader.vue') },
  { path: '/actionSheet', component: () => import('../components/feedback-component/ActionSheet.vue') }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
