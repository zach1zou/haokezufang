import request from '@/utils/request'
// 登录接口
export const login = (data) => {
  return request({
    method: 'POST',
    url: '/user/login',
    data: data
  })
}
// 我的获取用户信息接口
export const userApi = () => {
  return request({
    method: 'get',
    url: '/user'
  })
}
