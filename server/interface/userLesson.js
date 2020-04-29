import Router from 'koa-router'
import UserLesson from '../models/userLesson.js'
import checkUser from '../middleware/auth.js'
import { SIZE, ERR_OK } from '../config.js'
const router = new Router({
  prefix: '/user/course'
})

// 课程列表
router.get('/list', checkUser, async (ctx) => {
  const userid = ctx.session.user_id
  const { page = 1, size = SIZE, type } = ctx.query
  try {
    let where = { userid }
    if (type) {
      where['type.code'] = type
    }
    const total = await UserLesson.find(where).countDocuments()
    const result = await UserLesson.find(where).skip((page - 1) * size).limit(+size)
    if (result) {
      ctx.body = {
        code: ERR_OK,
        msg: '获取用户课程数据成功',
        data: {
          list: result,
          total: total
        }
      }
    } else {
      ctx.body = {
        code: -1,
        msg: '获取用户课程数据失败',
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

export default router
