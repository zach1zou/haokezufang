import request from '@/utils/request'
// 房屋具体信息接口
export const HouseCodeApi = (id) => {
  return request({
    method: 'get',
    url: '/houses/' + id
  })
}
