import request from '@/utils/request'

// 发表评论
const postComment = (storeId, comments) => {
  return request({
    method: 'post',
    url: `/comments/comment/${storeId}`,
    comments
  })
}

export {
  postComment
}
