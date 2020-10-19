import axios from 'axios'

const request = axios.create({
  // baseURL: 'http://192.168.32.45:80/' // 基础路径
  // baseURL: 'http://192.168.32.45:80/' // 基础路径
  baseURL: 'http://146.56.194.49/' // 云端基础路径
})

export default request
