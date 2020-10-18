import axios from 'axios'

// 上传图片的接口
const request = axios.create({
  baseURL: 'http://ttapi.research.itcast.cn' // 基础路径
})

export default request
