import axios from 'axios'

const request = axios.create({
  // baseURL: 'http://192.168.32.45:80/' // 基础路径
  baseURL: 'http://192.168.32.33:80/' // 基础路径
})

export default request
