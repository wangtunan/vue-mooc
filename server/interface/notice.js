import Router from 'koa-router'
import Notice from '../models/notice.js'
import UserNotice from '../models/userNotice.js'
import checkUser from '../middleware/auth.js'
import { SIZE, ERR_OK } from '../config.js'
import { getGuid } from '../../src/utils/utils.js'
const router = new Router({
  prefix: '/notice'
})

// 消息分页列表接口
router.get('/list', checkUser, async (ctx) => {
  const { page = 1, code } = ctx.query
  const userid = ctx.session.user_id
  let where = {}
  if (code) {
    where.code = code
  }
  try {
    const query =  Notice.find(where)
    const total = await Notice.find(where).countDocuments()
    const result = await query.skip( (page - 1) * SIZE ).limit(SIZE).lean()
    const userNoticeResult = await UserNotice.find({
      isDelete: false,
      userid: userid
    })
    // 判断主表有没有数据
    if (total === 0) {
      ctx.body = {
        code: 0,
        msg: '查询消息列表数据失败',
        data: {
          list: [],
          total: 0
        }
      }
      return false
    }
    result.forEach(notice => {
      notice['isRead'] = userNoticeResult.filter(item => {
        return item.messageid === notice.id && item.userid === userid && item.isRead
      }).length > 0
    })
    ctx.body = {
      code: ERR_OK,
      msg: '查询消息列表数据成功',
      data: {
        list: result,
        total: total
      }
    }
  } catch (e) {
    ctx.body = {
      code: -1,
      msg: e.message || '查询消息列表数据失败',
      data: {
        list: [],
        total: 0
      }
    }
  }
})

// 单个消息已读
router.post('/read', checkUser, async (ctx) => {
  const { id } = ctx.request.body
  const userid = ctx.session.user_id
  // 判断是否传入id
  if (!id) {
    ctx.body = {
      code: -1,
      msg: "请传入消息主键ID"
    }
    return false
  }
  // 先判断是否已经在用户消息表中，存在update，不存在create
  try {
    const checkResult = await UserNotice.findOne({
      userid: userid,
      messageid: id
    })
    if (!checkResult) {
      const createResult = await UserNotice.create({
        id: getGuid(),
        messageid: id,
        userid: userid,
        isRead: true,
        isDelete: false
      })
      if (createResult) {
        ctx.body = {
          code: ERR_OK,
          msg: "消息已读成功"
        }
      } else {
        ctx.body = {
          code: -1,
          msg: "消息已读失败"
        }
      }
    } else {
      const updateResult = await UserNotice.where({
        messageid: id,
        userid: userid,
      }).updateOne({
        isRead: true
      })
      if (updateResult) {
        ctx.body = {
          code: ERR_OK,
          msg: "消息已读成功"
        }
      } else {
        ctx.body = {
          code: -1,
          msg: "消息已读失败"
        }
      }
    }
  } catch(e) {
    ctx.body = {
      code: -1,
      msg: e.message || "消息删除失败",
      userid: userid
    }
  }
})

// 消息全部已读
router.post('/read/all', checkUser, async (ctx) => {
  const { ids } = ctx.request.body
  const userid = ctx.session.user_id
  try {
    const insertArr = []
    ids.forEach(id => {
      insertArr.push({
        id: getGuid(),
        messageid: id,
        userid: userid,
        isRead: true,
        isDelete: false
      })
    })
    const insertResult = await UserNotice.insertMany(insertArr)
    if (insertResult) {
      ctx.body = {
        code: ERR_OK,
        msg: '全部消息已读成功'
      }
    } else {
      ctx.body = {
        code: -1,
        msg: '全部消息已读失败'
      }
    }
  } catch (e) {
    ctx.body = {
      code: -1,
      msg: e.message || '全部消息已读失败'
    }
  }
})

// 单个删除消息
router.post('/delete', checkUser, async (ctx) => {
  const { id } = ctx.request.body
  const userid = ctx.session.user_id
  if (!id) {
    ctx.body = {
      code: -1,
      msg: "请传入消息主键ID"
    }
    return false
  }
  // 先判断是否已经在用户消息表中，存在update，不存在create
  try {
    const checkResult = await UserNotice.findOne({
      userid: userid,
      messageid: id
    })
    if (!checkResult) {
      const createResult = await UserNotice.create({
        id: getGuid(),
        messageid: id,
        userid: userid,
        isRead: false,
        isDelete: true
      })
      if (createResult) {
        ctx.body = {
          code: ERR_OK,
          msg: "消息删除成功"
        }
      } else {
        ctx.body = {
          code: -1,
          msg: "消息删除失败"
        }
      }
    } else {
      const updateResult = await UserNotice.where({
        messageid: id,
        userid: userid,
      }).updateOne({
        isDelete: true
      })
      if (updateResult) {
        ctx.body = {
          code: ERR_OK,
          msg: "消息删除成功"
        }
      } else {
        ctx.body = {
          code: -1,
          msg: "消息删除失败"
        }
      }
    }
  } catch(e) {
    ctx.body = {
      code: -1,
      msg: e.message || "消息删除失败"
    }
  }
})

// 是否存在未读消息
router.get('/read/not', checkUser, async (ctx) => {
  try {
    const noticeCount = await Notice.find().countDocuments()
    const userCount = await UserNotice.find({
      isDelete: false,
      userid: ctx.session.user_id
    }).countDocuments()
    ctx.body = {
      code: ERR_OK,
      msg: '获取成功',
      notice: noticeCount,
      user: userCount,
      data: noticeCount > userCount
    }
  } catch(e) {
    ctx.body = {
      code: -1,
      msg: e.message || '获取数据失败'
    }
  }
})

export default router
