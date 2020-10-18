import request from '@/utils/request'

// 用户验证码
const getLoginCode = telephone => {
  return request({
    method: 'get',
    url: '/validateCode/send4Login?telephone=' + telephone
  })
}

const login = data => {
  return request({
    method: 'post',
    url: '/user/login',
    data
  })
}

export {
  getLoginCode,
  login
}
