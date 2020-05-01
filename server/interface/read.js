import Router from 'koa-router'
import Read from '../models/read.js'
import ReadTypes from '../models/readType.js'
import { ERR_OK, SIZE } from '../config.js'
const router = new Router({
  prefix: '/read'
})

// 专栏类型接口
router.get('/types', async (ctx) => {
  try {
    const result = await ReadTypes.find().sort({
      sort: 1
    })
    if (result.length > 0) {
      ctx.body = {
        code: ERR_OK,
        msg: '获取专栏类型数据成功',
        data: result
      }
    } else {
      ctx.body = {
        code: -1,
        msg: '获取专栏类型数据失败',
        data: []
      }
    }
  } catch (e) {
    ctx.body = {
      code: -1,
      msg: e.message || '服务器异常'
    }
  }
})

// 专栏列表接口
router.get('/list', async (ctx) => {
  const { page = 1, type } = ctx.query
  try {
    let where = type ? { type } : {}
    const total = await Read.find(where).countDocuments()
    const result = await Read.find(where).skip((page - 1) * SIZE).limit(SIZE).lean()
    if (result.length > 0) {
      let list = getTryRead(result.slice())
      ctx.body = {
        code: ERR_OK,
        msg: "获取专栏列表数据成功",
        data: {
          list: list,
          total: total
        }
      }
    } else {
      ctx.body = {
        code: -1,
        msg: "获取专栏列表数据失败",
        data: {
          list: [],
          total: 0
        }
      }
    }
  } catch (e) {
    ctx.body = {
      code: -1,
      msg: e.message || '服务器异常'
    }
  }
})

// 专栏详情接口
router.get('/detail/:id', async (ctx) => {
  const { id } = ctx.params
  if (!id) {
    ctx.body = {
      code: -1,
      msg: '缺少id关键参数'
    }
    return false
  }
  try {
    const result = await Read.findOne({ id: id })
    if (result) {
      ctx.body = {
        code: ERR_OK,
        msg: '获取专栏详情成功',
        data: result
      }
    } else {
      ctx.body = {
        code: -1,
        msg: '获取专栏详情失败',
        data: null
      }
    }
  } catch (e) {
    ctx.body = {
      code: -1,
      msg: e.message || '服务器异常'
    }
  }
})

// 推荐专栏接口
router.get('/recommend', async (ctx) => {
  try {
    const where = { isRecommend: true }
    const result = await Read.find(where).limit(5)
    if (result.length > 0) {
      ctx.body = {
        code: ERR_OK,
        msg: '获取推荐专栏数据成功',
        data: result
      }
    } else {
      ctx.body = {
        code: -1,
        msg: '获取推荐专栏数据失败',
        data: [],
        result
      }
    }
  } catch (e) {
    ctx.body = {
      code: -1,
      msg: e.message || '服务器异常'
    }
  }
})

function getTryRead (array) {
  if (!array || array.length === 0) {
    return []
  }
  for (let i = 0; i < array.length; i++) {
    const chapter = array[i].chapter
    let result = []
    for (let j = 0; j < chapter.length; j++) {
      const chapterData = chapter[j]['data']
      for (let k = 0; k < chapterData.length; k++) {
        if (chapterData[k]['isTry']) {
          result.push(chapterData[k]['title'])
        }
      }
    }
    array[i]['tryRead'] = result
    delete array[i]['chapter']
  }
  return array
}

export default router