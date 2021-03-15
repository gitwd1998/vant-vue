import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home'

Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/home' },
  { path: '/home', component: Home },
  {
    path: '/notes', component: () => import('@/views/Notes'), redirect: '/notes/lists', children: [
      { path: '/notes/lists', component: () => import('@/views/Lists') },
      { path: '/notes/detail', component: () => import('@/views/Detail') },
      { path: '/notes/add', component: () => import('@/views/Add') },
    ]
  },
  { path: '/setting', component: () => import('@/views/Setting') },
  { path: '/button', component: () => import('@/components/base-component/Button') },
  { path: '/calendar', component: () => import('@/components/form-component/Calendar') },
  { path: '/shareSheet', component: () => import('@/components/feedback-component/ShareSheet') },
  { path: '/grid', component: () => import('@/components/nav-component/Grid') },
  { path: '/cascader', component: () => import('@/components/form-component/Cascader') },
  { path: '/datetimePicker', component: () => import('@/components/form-component/DatetimePicker') },
  { path: '/uploader', component: () => import('@/components/form-component/Uploader') },
  { path: '/actionSheet', component: () => import('@/components/feedback-component/ActionSheet') }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
