import Router from 'koa-router'
import Integral from '../models/integral.js'
import IntegralTypes from '../models/integralType.js'
import { ERR_OK, SIZE } from '../config.js'
const router = new Router({
  prefix: '/integral'
})

// 获取积分商品类别接口
router.get('/type', async (ctx) => {
  try {
    const result = await IntegralTypes.find()
    ctx.body = {
      code: ERR_OK,
      msg: '获取积分商品类别数据成功',
      data: result
    }
  } catch (e) {
    ctx.body = {
      code: -1,
      msg: e.message || '获取积分商品类别数据失败',
      data: []
    }
  }
})

// 分页获取积分商品
router.get('/list', async (ctx) => {
  const { page = 1, type, integral, size = SIZE } = ctx.query
  let where = {}
  if (type) {
    where.type = type
  }
  if (integral) {
    where.integral = {
      $lte: integral
    }
  }
  try {
    const total = await Integral.find(where).countDocuments()
    const result = await Integral.find(where).skip(( page - 1) * size).limit(+size).sort({
      type: 'asc'
    })
    ctx.body = {
      code: ERR_OK,
      msg: '获取积分商品数据成功',
      data: {
        list: result,
        total: total
      }
    }
  } catch (e) {
    ctx.body = {
      code: -1,
      msg: e.message || '获取积分商品列表数据失败',
    }
  }
})

export default router
