import Router from 'koa-router'
import Order from '../models/order.js'
import Cart from '../models/cart.js'
import Bill from '../models/bill.js'
import Recharge from '../models/recharge.js'
import UserLesson from '../models/userLesson.js'
import axios from 'axios'
import checkUser from '../middleware/auth.js'
import { getGuid, getOrderId } from '../../src/utils/utils.js'
import { ERR_OK, payWay, SIZE } from '../config.js';
const router = new Router({
  prefix: '/order'
})

// 生成订单
router.post('/create', checkUser, async (ctx) => {
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
router.get('/info', checkUser, async (ctx) => {
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
router.post('/pay', checkUser, async (ctx) => {
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
    let userLessonData = []
    const searchResult = await Order.findOne({
      userid: userid,
      code: code
    })
    const list = searchResult.list
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
    // 判断订单是否已支付
    if (+searchResult.status.code === 1) {
      ctx.body = {
        code: -1,
        msg: '当前订单已支付，切勿重复支付'
      }
      return false
    }
    // 如果是余额支付，则扣除余额
    if (+way === 2) {
      try {
        let cost = 0
        list.forEach(item => {
          if (item.isDiscount) {
            cost = Number((cost +  parseFloat(item.discountPrice)).toFixed(2))
          } else {
            cost = Number((cost +  parseFloat(item.price)).toFixed(2))
          }
        })
        // 判断余额是否充足
        const { data } = await axios.get(`http://127.0.0.1:4300/recharge/charge?userid=${userid}`)
        if (data.data < cost) {
          ctx.body = {
            code: -1,
            msg: '余额不足'
          }
          return false
        }
        const result = await Recharge.create({
          id: getGuid(),
          userid: userid,
          time: new Date().toISOString().replace('T', '').substring(0, 19),
          money: cost,
          action: {
            text: '转出',
            code: 1
          },
          way: {
            text: '余额',
            code: 2
          },
          remark: `订单支出，订单号：${code}`
        })

        if (!result) {
          ctx.body = {
            code: -1,
            msg: '余额支付失败'
          }
          return false
        }
      } catch (e) {
        ctx.body = {
          code: -1,
          msg: e.message || '余额支付失败'
        }
        return false
      }
    }
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
      userLessonData.push({
        id: getGuid(),
        userid: userid,
        lessonid: item.lessonid,
        title: item.title,
        img: item.img,
        type: {
          text: '实战课程',
          code: 1
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
    const billResult = await Bill.insertMany(insertBillData)
    const userLessonResult = await UserLesson.insertMany(userLessonData)
    if (orderResult && billResult && userLessonResult) {
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
router.get('/list', checkUser, async (ctx) => {
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
router.get('/cancel', checkUser, async (ctx) => {
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
router.get('/delete', checkUser, async (ctx) => {
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
