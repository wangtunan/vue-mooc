import Router from 'koa-router'
import Read from '../models/read.js'
import { ERR_OK, SIZE } from '../config.js'
const router = new Router({
  prefix: '/read'
})

router.get('/list', async (ctx) => {
  const { page = 1, type } = ctx.query
  let where = type ? { type } : {}
  const total = await Read.find(where).countDocuments()
  const result = await Read.find(where).skip((page - 1) * SIZE).limit(SIZE)
  if (result.length > 0) {
    ctx.body = {
      code: ERR_OK,
      msg: "获取专栏列表数据成功",
      data: {
        list: result,
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
})

export default router