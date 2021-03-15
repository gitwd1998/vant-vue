import axios from 'axios'
// axios.defaults.withCredentials = true;//配合后端拿到cookie中的值//为什么不起作用
console.warn(process.env)

let token = "wangdong19980302";


const service = axios.create({
    // baseURL: process.env.VUE_APP_BAES_URL,
    timeout: 3000,
})

// request interceptor(请求拦截器)
service.interceptors.request.use(request => {
    request.headers['wd-token'] = token
    console.warn('请求拦截器：', request)
    return request
}, error => {
    console.error('request-err：', error)
    Promise.reject(error)
})

// respone interceptor(应答拦截器)
service.interceptors.response.use(response => {
    console.warn('应答拦截器：', response);
    return response;
}, error => {
    console.error('response-err：', error)
    Promise.reject(error)
})

export default service