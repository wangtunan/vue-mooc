import Router from 'koa-router'
import Notice from '../models/notice.js'
import { SIZE, ERR_OK } from '../config.js'
const router = new Router({
  prefix: '/notice'
})

// 消息分页列表接口
router.get('/list', async (ctx) => {
  const { page = 1, code } = ctx.query
  let where = {
    isDelete: false
  }
  if (code) {
    where.code = code
  }
  const query =  Notice.find(where)
  const total = await Notice.find(where).countDocuments()
  const result = await query.skip( (page - 1) * SIZE ).limit(SIZE)
  if (result.length > 0) {
    ctx.body = {
      code: ERR_OK,
      msg: "查询消息列表数据成功",
      data: {
        list: result,
        total: total
      }
    }
  } else {
    ctx.body = {
      code: -1,
      msg: "查询消息列表数据失败",
      data: {
        list: [],
        total: 0
      }
    }
  }
})

// 单个消息已读
router.post('/read', async (ctx) => {
  const { id } = ctx.request.body
  // 判断是否传入id
  if (!id) {
    ctx.body = {
      code: -1,
      msg: "请传入消息主键ID"
    }
    return false
  }
  const result = await Notice.updateOne({
    id: id,
    isRead: false
  }, {
    isRead: true
  })
  if (result) {
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
})

// 消息全部已读
router.post('/read/all', async (ctx) => {
  const { code } = ctx.request.body
  let where = {
    isRead: false
  }
  if (code) {
    where.code = code
  }
  const result = await Notice.where(where).updateMany({
    isRead: true
  })
  if (result) {
    ctx.body = {
      code: ERR_OK,
      msg: "消息全部已读成功",
      where
    }
  } else {
    ctx.body = {
      code: -1,
      msg: "消息全部已读失败"
    }
  }
})

// 单个删除消息
router.post('/delete', async (ctx) => {
  const { id } = ctx.request.body
  if (!id) {
    ctx.body = {
      code: -1,
      msg: "请传入消息主键ID"
    }
    return false
  }
  const result = await Notice.updateOne({
    id: id,
    isDelete: false
  }, {
    isDelete: true
  })
  if (result) {
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
})

// 是否存在未读消息
router.get('/read/not', async (ctx) => {
  const result = await Notice.find({
    isRead: false
  })
  if (result) {
    ctx.body = {
      code: ERR_OK,
      msg: '获取成功',
      data: result.length > 0
    }
  } else {
    ctx.body = {
      code: -1,
      msg: '获取失败'
    }
  }
})

export default router
