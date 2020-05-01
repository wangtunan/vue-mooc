import Router from 'koa-router'
import Bill from '../models/bill.js'
import checkUser from '../middleware/auth.js'
import { ERR_OK, SIZE } from '../config.js'
const router = new Router({
  prefix: '/bill'
})

// 消费记录列表
router.get('/list', checkUser, async (ctx) => {
  const userid = ctx.session.user_id
  const { page = 1, size = SIZE } = ctx.query
  try {
    const where = {  userid }
    const searchResult = await Bill.find(where)
    const total = searchResult.length
    const count = searchResult.reduce((prev, curr) => {
      return prev + curr.cost
    }, 0)
    const result = await Bill.find(where).skip((page - 1) * size).limit(+size)
    if (result) {
      ctx.body = {
        code: ERR_OK,
        msg: '获取消费记录数据成功',
        data: {
          list: result,
          total: total,
          count: count
        }
      }
    } else {
      ctx.body = {
        code: -1,
        msg: '获取消费记录数据失败',
        data: {
          list: [],
          total: 0,
          count: 0
        }
      }
    }
  } catch (e) {
    ctx.body = {
      code: -1,
      msg: e.message || "服务器异常",
      data: {
        list: [],
        total: 0,
        count: 0
      }
    }
  }
})

export default router
