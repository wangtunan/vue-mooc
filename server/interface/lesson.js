import Router from 'koa-router'
import Lesson from '../models/lesson.js'
import { ERR_OK, SIZE } from '../config.js'
const router = new Router({
  prefix: '/lesson'
})

// 课程列表路由
router.get('/list', async (ctx) => {
  const { page = 1, size = SIZE, type = 0 } = ctx.query
  try {
    let where = {
      'type.code': type
    }
    const total = await Lesson.find(where).countDocuments()
    const result = await Lesson.find(where).skip((page - 1) * size).limit(+size)
    if (result) {
      ctx.body = {
        code: ERR_OK,
        msg: '获取课程数据成功',
        data: {
          list: result,
          total: total
        }
      }
    } else {
      ctx.body = {
        code: -1,
        msg: '获取课程数据失败',
        data: {
          list: [],
          total: 0
        }
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
