import Router from 'koa-router'
import Question from '../models/question.js'
import { ERR_OK, SIZE } from '../config.js'
const router = new Router({
  prefix: '/question'
})

// 问答列表路由
router.get('/list', async (ctx) => {
  let { page = 1, size = SIZE, label } = ctx.query
  try {
    const where = {}
    if (label) {
      where.tags = {
        $elemMatch: {
          $eq: label
        }
      }
    }
    const total = await Question.find(where).countDocuments()
    const result = await Question.find(where).skip((page - 1) * size).limit(+size)
    ctx.body = {
      code: ERR_OK,
      msg: '获取问答列表数据成功',
      data: {
        list: result,
        total: total
      }
    }
  } catch (e) {
    ctx.body = {
      code: -1,
      msg: e.message || '服务器异常',
      data: {
        list: [],
        total: 0
      }
    }
  }
})

export default router
