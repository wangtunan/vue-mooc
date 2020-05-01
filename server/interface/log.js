import Router from 'koa-router'
import Log from '../models/log.js'
import checkUser from '../middleware/auth.js'
import { SIZE, ERR_OK } from '../config.js'
const router = new Router({
  prefix: '/log'
})

// 分页获取登录日志接口
router.get('/list', checkUser,  async (ctx) => {
  const { page = 1 } = ctx.query
  const userid = ctx.session.user_id
  try {
    const where = { userid }
    const total = await Log.find(where).countDocuments()
    const result = await Log.find(where).skip((page - 1) * SIZE).limit(SIZE).sort({
      time: 'desc'
    })
    if (result) {
      ctx.body = {
        code: ERR_OK,
        msg: '获取登录日志数据成功',
        data: {
          list: result,
          total: total
        }
      }
    } else {
      ctx.body = {
        code: -1,
        msg: '获取登录日志数据失败',
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

// 新增一条登录日志
router.post('/create', checkUser,  async (ctx) => {
  const params = ctx.request.body
  try {
    const result = await Log.create(params)
    if (result) {
      ctx.body = {
        code: ERR_OK,
        msg: '新增登录日志成功'
      }
    } else {
      ctx.body = {
        code: -1,
        msg: '新增登录日志失败'
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
