import request from '@/utils/request'

// 发表评论
const postComment = (userId, storeId, comments) => {
  return request({
    method: 'post',
    url: `/comments/comment/${userId}/${storeId}`,
    data: {
      comments
    }
  })
}

// 获取店铺详情
const getDetail = id => {
  return request({
    method: 'get',
    url: `/store/id/${id}`
  })
}

// 上传图片
const postUploadImg = data => {
  return request({
    method: 'post',
    url: '/comments/pictureUpload',
    headers: { 'Content-Type': 'multipart/form-data' },
    data
  })
}

// 上传图片
/* const postUploadImg = () => {
  return request({
    method: 'post',
    url: '/comments/pictureUpload'
  })
}  */
export {
  postComment,
  getDetail,
  postUploadImg
}
