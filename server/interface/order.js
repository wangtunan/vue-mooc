import Router from 'koa-router'
import Order from '../models/order.js'
import Cart from '../models/cart.js'
import Bill from '../models/bill.js'
import { getGuid, getOrderId } from '../../src/utils/utils.js'
import { ERR_OK, payWay, SIZE } from '../config.js';
const router = new Router({
  prefix: '/order'
})

// 生成订单
router.post('/create', async (ctx) => {
  const userid = ctx.session.user_id
  const { list } = ctx.request.body

  if (!list || list.length === 0) {
    ctx.body = {
      code: -1,
      msg: '缺少订单关键参数list'
    }
    return false
  }
  try {
    let lessonIds = list.map(item => item.id)
    const orderid = getOrderId()
    const time = new Date().toISOString().replace('T', ' ').substring(0, 19)
    const orderResult = await Order.create({
      id: getGuid(),
      userid: userid,
      code: orderid,
      time: time,
      status: {
        text: '待支付',
        code: 0
      },
      way: {},
      list: list
    })
    const cartResult = await Cart.deleteMany({
      userid: userid,
      id: {
        $in: lessonIds
      }
    })
    if (orderResult && cartResult) {
      ctx.body = {
        code: ERR_OK,
        msg: '生成订单成功',
        data: {
          code: orderResult.code
        }
      }
    } else {
      ctx.body = {
        code: -1,
        msg: '生成订单失败'
      }
    }
  } catch (e) {
    ctx.body = {
      code: -1,
      msg: e.message || '服务器异常'
    }
  }
})

// 订单详情
router.get('/info', async (ctx) => {
  const userid = ctx.session.user_id
  const { code } = ctx.query
  try {
    const result = await Order.findOne({
      userid: userid,
      code: code,
      'status.code': 0
    })
    if (result) {
      ctx.body = {
        code: ERR_OK,
        msg: '获取订单详情成功',
        data: result
      }
    } else {
      ctx.body = {
        code: -1,
        msg: '获取订单详情失败获取',
        result
      }
    }
  } catch (e) {
    ctx.body = {
      code: -1,
      msg: '服务器异常'
    }
  }
})

// 订单支付
router.post('/pay', async (ctx) => {
  const userid = ctx.session.user_id
  const { code, way = 0 } = ctx.request.body
  if (!code) {
    ctx.body = {
      code: -1,
      msg: '缺少关键参数code'
    }
  }
  try {
    let insertBillData = []
    const searchResult = await Order.findOne({
      userid: userid,
      code: code
    })
    // 判断是否有订单信息
    if (!searchResult) {
      ctx.body = {
        code: -1,
        msg: '未找到当前订单信息'
      }
      return false
    }
    // 判断订单是否已过期
    const time = new Date(searchResult.time).getTime()
    const nowTime = new Date().getTime() - 8 * 60 * 60 * 1000
    const expired = searchResult.expired
    if ((time + expired) < nowTime) {
      ctx.body = {
        code: -1,
        msg: '订单已过期，请重新选择并添加至购物车'
      }
      return false
    }
    // 判断订是否已支付
    if (+searchResult.status.code === 1) {
      ctx.body = {
        code: -1,
        msg: '当前订单已支付，切勿重复支付'
      }
      return false
    }
    const list = searchResult.list
    list.forEach(item => {
      insertBillData.push({
        id: getGuid(),
        userid: userid,
        orderno: code,
        name: item.title,
        time: searchResult.time,
        cost: item.isDiscount ? item.discountPrice : item.price,
        way: {
          text: `${payWay[way]}支付`,
          code: way
        }
      })
    })
    const orderResult = await Order.findOneAndUpdate({
      userid: userid,
      code: code
    }, {
      status: {
        text: '已完成',
        code: 1
      },
      way: {
        text: `${payWay[way]}支付`,
        code: way
      }
    })
    const result = await Bill.insertMany(insertBillData)
    if (orderResult && result) {
      ctx.body = {
        code: ERR_OK,
        msg: '订单支付成功'
      }
    } else {
      ctx.body = {
        code: -1,
        msg: '订单支付失败'
      }
    }
  } catch (e) {
    ctx.body = {
      code: -1,
      msg: e.message || '服务器异常'
    }
  }
})

// 订单列表
router.get('/list', async (ctx) => {
  const userid = ctx.session.user_id
  const { page = 1, status = '', size = SIZE } = ctx.query
  // 主动处理过期数据
  try {
    const time = new Date((new Date().getTime() - 30 * 60 * 1000)).toISOString().replace('T', ' ').substring(0, 19)
    await Order.find({
      userid: userid,
      time: {
        $lt: time
      },
      'status.code': {
        $ne: 1
      }
    }).updateMany({
      status: {
        text: '已过期',
        code: 3
      }
    })
  } catch (e) {
    console.log(e.message)
  }
  try {
    let where = {
      userid: userid
    }
    if (status || status === 0 || status === '0') {
      if (+status === 2) {
        where['status.code'] = {
          $nin: [0, 1]
        }
      } else {
        where['status.code'] = status
      }
    }
    const total = await Order.find(where).countDocuments()
    const result = await Order.find(where).sort({
      time: -1
    }).skip((page - 1) * size).limit(+size)
    if (result) {
      ctx.body = {
        code: ERR_OK,
        msg: '获取订单数据成功',
        data: {
          list: result,
          total: total
        }
      }
    } else {
      ctx.body = {
        code: -1,
        msg: '获取订单数据成功',
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

// 取消订单
router.get('/cancel', async (ctx) => {
  const userid = ctx.session.user_id
  const { id } = ctx.query
  if (!id) {
    ctx.body = {
      code: -1,
      msg: '缺少关键参数id'
    }
    return false
  }
  try {
    const result = await Order.findOneAndUpdate({
      id: id,
      userid: userid
    }, {
      status: {
        text: '已关闭',
        code: 2
      }
    })
    if (result) {
      ctx.body = {
        code: ERR_OK,
        msg: '订单取消成功'
      }
    } else {
      ctx.body = {
        code: -1,
        msg: '订单取消失败'
      }
    }
  } catch(e) {
    ctx.body = {
      code: -1,
      msg: e.message || '服务器异常'
    }
  }
})

// 删除订单
router.get('/delete', async (ctx) => {
  const userid = ctx.session.user_id
  const { id } = ctx.query
  if (!id) {
    ctx.body = {
      code: -1,
      msg: '缺少关键参数id'
    }
    return false
  }
  try {
    const result = await Order.findOneAndDelete({
      id: id,
      userid: userid
    })
    if (result) {
      ctx.body = {
        code: ERR_OK,
        msg: '订单删除成功'
      }
    } else {
      ctx.body = {
        code: -1,
        msg: '订单删除失败'
      }
    }
  } catch(e) {
    ctx.body = {
      code: -1,
      msg: e.message || '服务器异常'
    }
  }
})

export default router
