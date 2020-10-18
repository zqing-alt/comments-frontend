import request from '@/utils/request'

// 用户登录
const getLoginCode = data => {
  return request({
    method: 'get',
    url: '/validateCode/send4Login',
    data
  })
}

export {
  getLoginCode
}
