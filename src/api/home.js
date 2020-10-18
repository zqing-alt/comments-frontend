import request from '@/utils/request'

// 用户验证码
const getHomedata = telephone => {
  return request({
    method: 'get',
    url: '/validateCode/send4Login' + telephone
  })
}

export {
  getHomedata
}
