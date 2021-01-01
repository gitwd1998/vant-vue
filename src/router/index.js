import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', component: Home },
  { path: '/Friends', component: () => import('../views/Friends.vue') },
  { path: '/Setting', component: () => import('../views/Setting.vue') },
  { path: '/Button', component: () => import('../components/base-component/Button.vue') },
  { path: '/Calendar', component: () => import('../components/form-component/Calendar.vue') },
  { path: '/ShareSheet', component: () => import('../components/feedback-component/ShareSheet.vue') },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
