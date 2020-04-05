import Router from 'koa-router'
import Hot from '../models/hot.js'
import History from '../models/history.js'
import { ERR_OK } from '../config.js'
import { getGuid } from '../../src/utils/utils.js'
const router = new Router({
  prefix: '/common'
})

// 热词接口
router.get('/hot', async (ctx) => {
  const result = await Hot.find().sort({
    time: -1
  })
  if (result.length > 0) {
    ctx.body = {
      code: ERR_OK,
      msg: '获取热词数据成功',
      data: result
    }
  } else {
    ctx.body = {
      code: -1,
      msg: '获取热词数据失败',
      data: []
    }
  }
})

// 获取搜索历史接口
router.get('/history', async (ctx) => {
  const result = await History.find()
  if (result.length > 0) {
    ctx.body = {
      code: ERR_OK,
      msg: '获取搜索历史数据成功',
      data: result
    }
  } else {
    ctx.body = {
      code: -1,
      msg: '获取搜索历史数据失败',
      data: []
    }
  }
})

// 生成一条搜索历史接口
router.get('/history/create', async (ctx) => {
  const result = await History.create({
    id: getGuid(),
    value: ctx.query.keyword,
    time: new Date().toISOString()
  })
  if (result) {
    ctx.body = {
      code: ERR_OK,
      msg: '搜索历史生成成功',
      data: null
    }
  } else {
    ctx.body = {
      code: -1,
      msg: '搜索历史生成失败',
      data: null
    }
  }
})

export default router
