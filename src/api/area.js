import request from '@/utils/request'
// 获取获取城市列表数据接口
export const cityApi = () => {
  return request({
    method: 'get',
    url: '/area/city',
    params: {
      level: 1
    }
  })
}
// 获取热门城市接口
export const hotCityApi = () => {
  return request({
    method: 'get',
    url: '/area/hot'
  })
}
