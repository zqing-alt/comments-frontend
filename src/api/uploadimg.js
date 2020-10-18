import request from '@/utils/request1'
// 上传图片

/**
 * 上传图片
 */
const updateUserAvatar = data => {
  return request({
    method: 'PATCH',
    url: '/app/v1_0/user/photo',
    data
  })
}

export {
  updateUserAvatar
}
