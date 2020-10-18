import request from '@/utils/request'

// 获取数据
const getHomedata = () => {
  return request({
    method: 'get',
    url: '/store/all'
  })
}

export {
  getHomedata
}
