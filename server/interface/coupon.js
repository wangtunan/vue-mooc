import Router from 'koa-router'
import Coupon from '../models/coupon.js'
import checkUser from '../middleware/auth.js'
import { ERR_OK } from '../config.js'
const router = new Router({
  prefix: '/coupon'
})

// 优惠券列表数据
router.get('/list', checkUser, async (ctx) => {
  const userid = ctx.session.user_id
  const { status } = ctx.query
  try {
    const result = await Coupon.find({
      userid: userid,
      'status.code': status
    }).sort({
      number: 'desc'
    })
    if (result) {
      ctx.body = {
        code: ERR_OK,
        msg: '获取优惠券信息成功',
        data: result
      }
    } else {
      ctx.body = {
        code: -1,
        msg: '获取优惠券信息失败'
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
