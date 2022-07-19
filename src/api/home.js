import request from '@/utils/request'
// 轮播图接口
export const banner = () => {
  return request({
    method: 'get',
    url: '/home/swiper'
  })
}

// 租房小组
export const RentGroup = (id) => {
  return request({
    method: 'get',
    url: '/home/groups',
    params: {
      area: id
    }
  })
}
