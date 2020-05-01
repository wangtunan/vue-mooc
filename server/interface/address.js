import Router from 'koa-router'
import Address from '../models/address.js'
import { ERR_OK } from '../config.js'
import { getGuid } from '../../src/utils/utils.js'
import checkUser from '../middleware/auth.js'
const router = new Router({
  prefix: '/address'
})

// 获取收获地址接口
router.get('/list', checkUser, async (ctx) => {
  try {
    const result = await Address.find({
      userid: ctx.session.user_id
    }).sort({
      isDefault: 'desc'
    })
    if (result.length >= 0) {
      ctx.body = {
        code: ERR_OK,
        msg: '获取收获地址数据成功',
        data: result
      }
    } else {
      ctx.body = {
        code: -1,
        msg: '获取收获地址数据失败',
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

// 新增收获地址接口
router.post('/create', checkUser, async (ctx) => {
  const params = ctx.request.body
  try {
    params.id = getGuid()
    params.userid = ctx.session.user_id
    const result = await Address.create(params)
    if (result) {
      ctx.body = {
        code: ERR_OK,
        msg: '新增收获地址数据成功'
      }
    } else {
      ctx.body = {
        code: -1,
        msg: '新增收获地址数据失败'
      }
    }
  } catch (e) {
    ctx.body = {
      code: -1,
      msg: e.message || '服务器异常'
    }
  }
})

// 编辑收获地址接口
router.post('/update', checkUser, async (ctx) => {
  const params = ctx.request.body
  try {
    const result = await Address.findOneAndUpdate({
      userid: ctx.session.user_id,
      id: params.id
    }, {
      name: params.name,
      phone: params.phone,
      area: params.area,
      address: params.address,
      postcode: params.postcode
    })
    if (result) {
      ctx.body = {
        code: ERR_OK,
        msg: '编辑收获地址数据成功'
      }
    } else {
      ctx.body = {
        code: -1,
        msg: '编辑收获地址数据失败'
      }
    }
  } catch (e) {
    ctx.body = {
      code: -1,
      msg: e.message || '服务器异常'
    }
  }
})

// 删除收获地址接口
router.get('/delete', checkUser, async (ctx) => {
  const { id } = ctx.query
  if (!id) {
    ctx.body = {
      code: -1,
      msg: '缺少关键主键id参数'
    }
    return false
  }
  try {
    const result = await Address.deleteOne({
      userid: ctx.session.user_id,
      id: id
    })
    if (result) {
      ctx.body = {
        code: ERR_OK,
        msg: '删除收获地址数据成功'
      }
    } else {
      ctx.body = {
        code: -1,
        msg: '删除收获地址数据失败'
      }
    }
  } catch (e) {
    ctx.body = {
      code: -1,
      msg: e.message || '服务器异常'
    }
  }
})

// 设为默认收获地址
router.get('/default', checkUser, async (ctx) => {
  const { id } = ctx.query
  const userid = ctx.session.user_id
  try {
    const setResult = await Address.find({
      userid: userid
    }).updateMany({
      isDefault: false
    })
    if (!setResult) {
      ctx.body = {
        code: -1,
        msg: '设置默认收件地址失败'
      }
      return false
    }
    const updateResult = await Address.findOneAndUpdate({
      userid: userid,
      id: id
    }, {
      isDefault: true
    })
    if (updateResult) {
      ctx.body = {
        code: ERR_OK,
        msg: '设置默认收件地址成功'
      }
    } else {
      ctx.body = {
        code: -1,
        msg: '设置默认收件地址失败'
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
