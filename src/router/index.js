import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/layout' },
  { path: '/login', component: () => import('@/views/Login') },
  { path: '/regist', component: () => import('@/views/Regist') },
  {
    path: '/layout', component: () => import('@/layout'), redirect: '/home', children: [
      { path: '/home', component: () => import('@/views/Home') },
      {
        path: '/notes', component: () => import('@/views/notes'), redirect: '/notes/lists', children: [
          { path: '/notes/lists', component: () => import('@/views/notes/Lists') },
          { path: '/notes/detail', component: () => import('@/views/notes/Detail') },
          { path: '/notes/add', component: () => import('@/views/notes/Add') },
          { path: '/notes/edit', component: () => import('@/views/notes/Edit') },
        ]
      },
      { path: '/setting', component: () => import('@/views/Setting') },
      { path: '/button', component: () => import('@/components/base-component/Button') },
      { path: '/calendar', component: () => import('@/components/form-component/Calendar') },
      { path: '/shareSheet', component: () => import('@/components/feedback-component/ShareSheet') },
      // 导航组件
      { path: '/grid', component: () => import('@/components/nav-component/Grid') },
      { path: '/tab', component: () => import('@/components/nav-component/Tab') },
      { path: '/cascader', component: () => import('@/components/form-component/Cascader') },
      { path: '/datetimePicker', component: () => import('@/components/form-component/DatetimePicker') },
      { path: '/uploader', component: () => import('@/components/form-component/Uploader') },
      { path: '/actionSheet', component: () => import('@/components/feedback-component/ActionSheet') },
      { path: '/popover', component: () => import('@/components/show-component/Popover') },
    ]
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
