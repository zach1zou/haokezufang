import request from '@/utils/request'
// 轮播图接口
export const banner = () => {
  return request({
    method: 'get',
    url: '/home/swiper'
  })
}
