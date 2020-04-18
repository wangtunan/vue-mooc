import Router from 'koa-router'
import ArticleType from '../models/articleType.js'
import Article from '../models/article.js'
import { ERR_OK, SIZE } from '../config.js'
const router = new Router({
  prefix: '/article'
})

// 获取手记分类列表路由
router.get('/type', async (ctx) => {
  try {
    const result = await ArticleType.find()
    if (result) {
      ctx.body = {
        code: ERR_OK,
        msg: '获取手记分类数据成功',
        data: result
      }
    } else {
      ctx.body = {
        code: -1,
        msg: '获取手记分类数据失败',
        data: []
      }
    }
  } catch (e) {
    ctx.body = {
      code: e.message || '服务器异常',
      msg: '获取手记分类数据失败',
      data: []
    }
  }
})

// 获取手记列表路由
router.get('/list', async (ctx) => {
  const { page = 1, size = SIZE, code } = ctx.query
  try {
    const where = {}
    if (code) {
      where['type.code'] = code
    }
    const total = await Article.find(where).countDocuments()
    const result = await Article.find(where).skip((page - 1) * size).limit(+size)
    if (result) {
      ctx.body = {
        code: ERR_OK,
        msg: '获取手机列表数据成功',
        data: {
          list: result,
          total: total
        }
      }
    } else {
      ctx.body = {
        code: -1,
        msg: '获取手记列表数据失败',
        data: {
          list: [],
          total: 0
        }
      }
    }
  } catch (e) {
    ctx.body = {
      code: -1,
      msg: '服务器异常',
      data: {
        list: [],
        total: 0
      }
    }
  }
})

export default router
