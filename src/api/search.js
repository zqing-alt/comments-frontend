import request from '@/utils/request'

// 搜索建议
const getSearchSuggestion = (params) => {
  return request({
    url: `/store/keys/${params}`,
    method: 'GET'
  })
}

// 搜索结果
const getSearchResult = (params) => {
  return request({
    url: `/store/${params}`,
    method: 'GET'
  })
}

// 搜索发现
const discoverStore = () => {
  return request({
    url: '/store/discovery',
    method: 'GET'
  })
}
// 向外导出
export { getSearchSuggestion, getSearchResult, discoverStore }
