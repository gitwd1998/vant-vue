import request from '@/utils/request'
import { ROOT_API } from "@/utils/utils";
// 验证码
export function captcha() {
    return request({
        url: ROOT_API + '/captcha',
        method: 'post',
    })
}
// 登录
export function login(data) {
    return request({
        url: ROOT_API + '/login',
        method: 'post',
        data
    })
}
// 注册
export function regist(data) {
    return request({
        url: ROOT_API + '/regist',
        method: 'post',
        data
    })
}
// 初始化列表
export function init() {
    return request({
        url: ROOT_API + '/init',
        method: 'post',
    })
}
// 查看详情
export function detail(data) {
    return request({
        url: ROOT_API + '/detail',
        method: 'post',
        data
    })
}
// 添加
export function add(data) {
    return request({
        url: ROOT_API + '/add',
        method: 'post',
        data
    })
}
// 删除
export function detele(data) {
    return request({
        url: ROOT_API + '/detele',
        method: 'post',
        data
    })
}
// 修改
export function edit(data) {
    return request({
        url: ROOT_API + '/edit',
        method: 'post',
        data
    })
}
