import Router from 'koa-router'
import Cart from '../models/cart.js'
import checkUser from '../middleware/auth.js'
import { getGuid } from '../../src/utils/utils.js'
import { ERR_OK } from '../config.js';
const router = new Router({
  prefix: '/cart'
})

// 购物车列表接口
router.get('/list', checkUser,  async (ctx) => {
  const userid = ctx.session.user_id
  try {
    const where = { userid: userid }
    const result = await Cart.find(where)
    if (result) {
      ctx.body = {
        code: ERR_OK,
        msg: '获取购物车数据成功',
        data: result
      }
    } else {
      ctx.body = {
        code: -1,
        msg: '获取购物车数据失败',
        data: []
      }
    }
  } catch (e) {
    ctx.body = {
      code: -1,
      msg: e.message || '服务器异常',
      data: []
    }
  }
})

// 添加购物车
router.post('/create', checkUser, async (ctx) => {
  const userid = ctx.session.user_id
  const { id, title, img, price, isDiscount, discountPrice } = ctx.request.body
  try {
    // 判断是否已存在
    const searchResult = await Cart.find({
      userid: userid,
      lessonid: id
    })
    if (searchResult.length > 0) {
      ctx.body = {
        code: -1,
        msg: '当前课程已添加到购物车，不当重复添加'
      }
      return false
    }
    const result = await Cart.create({
      id: getGuid(),
      userid: userid,
      lessonid: id,
      img: img,
      title: title,
      price: price,
      isDiscount: isDiscount,
      discountPrice: discountPrice
    })
    if (result) {
      ctx.body = {
        code: ERR_OK,
        msg: '添加购物车成功'
      }
    } else {
      ctx.body = {
        code: -1,
        msg: '添加购物车失败'
      }
    }
  } catch(e) {
    ctx.body = {
      code: -1,
      msg: e.message || '服务器异常'
    }
  }
})

// 删除购物车
router.post('/delete', checkUser, async (ctx) => {
  const userid = ctx.session.user_id
  const { id } = ctx.request.body
  if (!id) {
    ctx.body = {
      code: -1,
      msg: '缺少关键参数id'
    }
    return false
  }
  try {
    const result = await Cart.deleteOne({
      userid: userid,
      id: id
    })
    if (result) {
      ctx.body = {
        code: ERR_OK,
        msg: '删除购物车数据成功',
        result: result
      }
    } else {
      ctx.body = {
        code: -1,
        msg: '删除购物车数据失败'
      }
    }
  } catch (e) {
    ctx.body = {
      code: -1,
      msg: e.message || '服务器异常'
    }
  }
})

// 批量删除购物车
router.post('/delete/ids', checkUser,  async (ctx) => {
  const userid = ctx.session.user_id
  const { ids } = ctx.request.body
  if (!ids || ids.length === 0) {
    ctx.body = {
      code: -1,
      msg: '缺少关键参数ids'
    }
    return false
  }
  try {
    const result = await Cart.deleteMany({
      userid: userid,
      id: {
        $in: ids
      }
    })
    if (result) {
      ctx.body = {
        code: ERR_OK,
        msg: '删除购物车数据成功'
      }
    } else {
      ctx.body = {
        code: -1,
        msg: '删除购物车数据失败'
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
