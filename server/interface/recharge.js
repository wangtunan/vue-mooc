import Router from 'koa-router'
import Recharge from '../models/recharge.js'
import checkUser from '../middleware/auth.js'
import { ERR_OK, SIZE } from '../config.js'
import { getGuid } from '../../src/utils/utils.js'
const router = new Router({
  prefix: '/recharge'
})

// 用户充值记录路由
router.get('/list', checkUser,  async (ctx) => {
  const userid = ctx.session.user_id
  const { page = 1, size = SIZE } = ctx.query
  const where = { userid }
  try {
    const searchResult = await Recharge.find(where)
    let sum = 0
    searchResult.forEach(item => {
      if (item.action.code === 0) {
        sum = Number((sum + parseFloat(item.money)).toFixed(2))
      } else if (item.action.code === 1) {
        sum = sum - parseFloat(item.money)
      }
    })
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
router.post('/create', checkUser,  async (ctx) => {
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
      remark: way === 0 ? '支付宝充值' : '微信充值'
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

// 用户余额路由
router.get('/charge', checkUser, async (ctx) => {
  const userid = ctx.session.user_id || ctx.query.userid
  try {
    const result = await Recharge.find({
      userid: userid
    })
    let charge = 0
    if (result.length === 0) {
      ctx.body = {
        code: 0,
        msg: '当前用户暂无充值记录',
        data: 0
      }
    } else {
      result.forEach(item => {
        if (item.action.code === 0) {
          charge = Number((charge + parseFloat(item.money)).toFixed(2))
        } else if (item.action.code === 1) {
          charge = charge - parseFloat(item.money)
        }
      })
      ctx.body = {
        code: ERR_OK,
        msg: '查询用户余额数据成功',
        data: charge
      }
    }
  } catch (e) {
    ctx.body = {
      code: -1,
      msg: e.message || '服务器异常',
      data: 0
    }
  }
})

export default router
