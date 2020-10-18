import request from '@/utils/request'

// 搜索建议
const getSearchSuggestion = (params) => {
  return request({
    url: '/app/v1_0/suggestion',
    method: 'GET',
    params
  })
}

// 搜索结果
const getSearchResult = (params) => {
  return request({
    url: '/app/v1_0/search',
    method: 'GET',
    params
  })
}

// 搜索历史
const getUserSearchHistory = () => {
  return request({
    url: '/app/v1_0/search/histories',
    method: 'GET'
  })
}
// 向外导出
export { getSearchSuggestion, getSearchResult, getUserSearchHistory }
