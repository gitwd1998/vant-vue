import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store'

Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/layout' },
  { path: '/login', name: 'Login', component: () => import('@/views/Login.vue') },
  { path: '/regist', name: 'Regist', component: () => import('@/views/Regist.vue') },
  {
    path: '/layout', component: () => import('@/layout/Main'), redirect: '/home', children: [
      { path: '/home', name: 'Home', component: () => import('@/views/Home.vue') },
      { path: '/notes', name: 'Notes', component: () => import('@/views/Notes.vue') },
      { path: '/setting', name: 'Setting', component: () => import('@/views/Setting.vue') },
    ]
  },
  {
    path: '/child', name: 'Child', component: () => import('@/layout/Child'), children: [
      // notes子页面
      { path: '/notes/detail', name: 'Detail', component: () => import('@/views/notes/Detail.vue') },
      { path: '/notes/add', name: 'Add', component: () => import('@/views/notes/Add.vue') },
      { path: '/notes/edit', name: 'Edit', component: () => import('@/views/notes/Edit.vue') },
      // setting子页面
      { path: '/setting/changePassword', name: 'Change Password', component: () => import('@/views/setting/ChangePassword.vue') },
      { path: '/setting/changePortrait', name: 'Change Portrait', component: () => import('@/views/setting/ChangePortrait.vue') },
      // 基础组件
      { path: '/button', name: 'Button', component: () => import('@/components/base-component/Button.vue') },
      // 表单组件
      { path: '/calendar', name: 'Calender', component: () => import('@/components/form-component/Calendar.vue') },
      { path: '/cascader', name: 'Cascader', component: () => import('@/components/form-component/Cascader.vue') },
      { path: '/datetimePicker', name: 'Datetime Picker', component: () => import('@/components/form-component/DatetimePicker.vue') },
      { path: '/uploader', name: 'Uploader', component: () => import('@/components/form-component/Uploader.vue') },
      // 反馈组件
      { path: '/actionSheet', name: 'Action Sheet', component: () => import('@/components/feedback-component/ActionSheet.vue') },
      { path: '/shareSheet', name: 'Share Sheet', component: () => import('@/components/feedback-component/ShareSheet.vue') },
      // 展示组件
      { path: '/popover', name: 'Popover', component: () => import('@/components/show-component/Popover.vue') },
      // 导航组件
      { path: '/grid', name: 'Grid', component: () => import('@/components/nav-component/Grid.vue') },
      { path: '/tab', name: 'Tab', component: () => import('@/components/nav-component/Tab.vue') },
      // 业务组件

    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  console.log(from.path, '==>', to.path);
  if (to.path.includes(from.path)) {
    store.commit('setTurn', 'go')
  } else if (from.path.includes(to.path)) {
    store.commit('setTurn', 'back');
  } else {
    store.commit('setTurn', 'switch');
  }
  next()
})

router.afterEach(to => {
  document.title = to.name || 'vant-vue'
})


export default router
