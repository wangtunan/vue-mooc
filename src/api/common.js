import axios from 'utils/axios.js'
import Axios from 'axios'
import { IS_MOCK } from 'api/config.js'

// 获取用户搜索历史
export function getSearchHistory () {
  return axios.get(`/mock/common/${ IS_MOCK ? 'history' : 'search-history.json' }`)
}
// 获取热搜词接口
export function getHot () {
  return axios.get(`/mock/common/hot${ IS_MOCK ? '' : '.json' }`)
}
// 获取底部版权footer数据
export function getFooter () {
  return axios.get('/mock/common/footer.json')
}
// 获取头部数据接口
export function getHeader () {
  return axios.get('/mock/common/header.json')
}
// 获取实时搜索数据
export function getSearch (keyword) {
  return new Promise((resolve, reject) => {
    Axios.get('https://www.imooc.com/search/history', {
      params: {
        words: keyword
      }
    }).then(res => {
      const { status, data: { result, data } } = res
      if (status === 200 && result === 0) {
        resolve({
          code: 0,
          msg: '获取成功',
          data: data
        })
      } else {
        reject({
          code: -1,
          msg: '获取失败'
        })
      }
    }).catch(error => {
      reject({
        code: -1,
        msg: error.message || '获取失败'
      })
    })
  })
}