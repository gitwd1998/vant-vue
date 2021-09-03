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
      {
        path: '/setting', component: () => import('@/views/setting'), redirect: '/setting/info', children: [
          { path: '/setting/info', component: () => import('@/views/setting/Info') },
          { path: '/setting/changePassword', component: () => import('@/views/setting/ChangePassword') },
          { path: '/setting/changePortrait', component: () => import('@/views/setting/ChangePortrait') },
        ]
      },
      // 基础组件
      { path: '/button', component: () => import('@/components/base-component/Button') },
      // 表单组件
      { path: '/calendar', component: () => import('@/components/form-component/Calendar') },
      { path: '/cascader', component: () => import('@/components/form-component/Cascader') },
      { path: '/datetimePicker', component: () => import('@/components/form-component/DatetimePicker') },
      { path: '/uploader', component: () => import('@/components/form-component/Uploader') },
      // 反馈组件
      { path: '/actionSheet', component: () => import('@/components/feedback-component/ActionSheet') },
      { path: '/shareSheet', component: () => import('@/components/feedback-component/ShareSheet') },
      // 展示组件
      { path: '/popover', component: () => import('@/components/show-component/Popover') },
      // 导航组件
      { path: '/grid', component: () => import('@/components/nav-component/Grid') },
      { path: '/tab', component: () => import('@/components/nav-component/Tab') },
      // 业务组件

    ]
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
