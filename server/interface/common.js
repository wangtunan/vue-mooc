import Router from 'koa-router'
import Hot from '../models/hot.js'
import History from '../models/history.js'
import Nav from '../models/nav.js'
import Footer from '../models/footer.js'
import { ERR_OK } from '../config.js'
import { getGuid } from '../../src/utils/utils.js'
const router = new Router({
  prefix: '/common'
})

// 头部导航接口
router.get('/nav', async (ctx) => {
  try {
    const result = await Nav.find()
    if (result.length >= 0) {
      ctx.body = {
        code: ERR_OK,
        msg: '获取头部导航数据成功',
        data: result
      }
    } else {
      ctx.body = {
        code: -1,
        msg: '获取头部导航数据失败',
        data: []
      }
    }
  } catch (e) {
    ctx.body = {
      code: -1,
      msg: e.message || '服务器异常'
    }
  }
})

// 热词接口
router.get('/hot', async (ctx) => {
  try {
    const result = await Hot.find().sort({
      time: -1
    })
    if (result.length >= 0) {
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
  } catch (e) {
    ctx.body = {
      code: -1,
      msg: e.message || '服务器异常'
    }
  }
})

// 获取搜索历史接口
router.get('/history', async (ctx) => {
  try {
    const result = await History.find().sort({
      time: -1
    }).limit(5)
    if (result.length >= 0) {
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
  } catch (e) {
    ctx.body = {
      code: -1,
      msg: e.message || '服务器异常'
    }
  }
})

// 生成一条搜索历史接口
router.get('/history/create', async (ctx) => {
  try {
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
  } catch (e) {
    ctx.body = {
      code: -1,
      msg: e.message || '服务器异常'
    }
  }
})

// 底部链接接口
router.get('/footer', async (ctx) => {
  try {
    const result = await Footer.find().sort({
      sort: 'ascending'
    })
    if (result.length >= 0) {
      ctx.body = {
        code: ERR_OK,
        msg: '获取底部链接数据成功',
        data: result
      }
    } else {
      ctx.body = {
        code: -1,
        msg: '获取底部链接数据失败',
        data: []
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
