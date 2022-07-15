import store from '@/store'
import axios from 'axios'

const request = axios.create({
  baseURL: 'http://liufusong.top:8080',
  timeout: 50000
})

// 添加拦截器
request.interceptors.request.use(
  (config) => {
    // Do something before request is sent
    if (store.state.user) {
      // console.log(store.state.user, 'token')
      // config.headers.Authorization = 'Bearer ' + store.state.user.token
      // config.headers.Authorization = localStorage.getItem('HK-Token')
      config.headers.Authorization = store.state.user
    }
    return config
  },
  (error) => {
    // Do something with request error
    return Promise.reject(error)
  }
)

export default request
