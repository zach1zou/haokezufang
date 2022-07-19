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
// 我的用户退出接口
export const loginout = () => {
  return request({
    method: 'post',
    url: '/user/logout'
  })
}
// 我的收藏列表接口
export const favoriteListApi = () => {
  return request({
    method: 'GET',
    url: '/user/favorites'
  })
}
// 查看已经发布房源的的列表接口
export const RentListApi = () => {
  return request({
    method: 'GET',
    url: '/user/houses'
  })
}
