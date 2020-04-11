import Router from 'koa-router'
import Recharge from '../models/recharge.js'
import { ERR_OK, SIZE } from '../config.js'
import { getGuid } from '../../src/utils/utils.js'
const router = new Router({
  prefix: '/recharge'
})

// 用户充值记录路由
router.get('/list', async (ctx) => {
  const userid = ctx.session.user_id
  const { page = 1, size = SIZE } = ctx.query
  const where = { userid }
  try {
    const searchResult = await Recharge.find(where)
    const sum = searchResult.map(item => item.money).reduce((prev, current) => {
      return prev + current
    }, 0)
    const total = searchResult.length
    const result = await Recharge.find(where).skip((page - 1) * size).limit(+size).sort({
      time: 'desc'
    })
    ctx.body = {
      code: ERR_OK,
      msg: '查询充值记录数据成功',
      data: {
        sum: sum,
        list: result,
        total: total
      }
    }
  } catch (e) {
    ctx.body = {
      code: -1,
      msg: e.message || '服务器异常'
    }
  }
})

// 新增用户充值记录路由
router.post('/create', async (ctx) => {
  const userid = ctx.session.user_id
  const { money, way } = ctx.request.body
  // 判断金额
  if (money < 0 || money > 50000) {
    ctx.body = {
      code: -1,
      msg: '充值金额异常，必须在0~50000之间'
    }
    return false
  }
  // 判断支付方式
  if (![0, 1].includes(+way)) {
    ctx.body = {
      code: -1,
      msg: '充值方式错误，目前只支持支付宝和微信'
    }
    return false
  }
  try {
    const params = {
      id: getGuid(),
      userid: userid,
      money: money,
      time: new Date().toISOString().replace('T', ' ').substring(0, 19),
      action: {
        text: '转入',
        code: 0
      },
      way: {
        text: way === 0 ? '支付宝' : '微信',
        code: way
      },
      remark: way === 0 ? '支付宝转入' : '微信转入'
    }
    const result = await Recharge.create(params)
    if (result) {
      ctx.body = {
        code: ERR_OK,
        msg: '用户充值成功'
      }
    } else {
      ctx.body = {
        code: -1,
        msg: '用户充值失败'
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
