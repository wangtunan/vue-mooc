import Router from 'koa-router'
import Label from '../models/label.js'
import LableType from '../models/labelType.js'
import LabelFollow from '../models/labelFollow.js'
import checkUser from '../middleware/auth.js'
import { ERR_OK } from '../config.js'
import { getGuid } from '../../src/utils/utils.js';
const router = new Router({
  prefix: '/label'
})

// 获取标签分类路由
router.get('/types', async (ctx) => {
  try {
    const result = await LableType.find().sort({
      sort: 'asc'
    })
    if (result) {
      ctx.body = {
        code: ERR_OK,
        msg: '获取标签分类成功',
        data: result
      }
    } else {
      ctx.body = {
        code: -1,
        msg: '获取标签分类失败',
        data: []
      }
    }
  } catch (e) {
    ctx.body = {
      code: -1,
      msg: '服务器异常'
    }
  }
})

// 获取标签列表路由
router.get('/list', async (ctx) => {
  const { code } = ctx.query
  let where = {}
  if (code) {
    where['status.code'] = code 
  }
  try {
    const result = await Label.find(where).sort({
      'type.code': 'asc',
      sort: 'asc'
    })
    if (result) {
      ctx.body = {
        code: ERR_OK,
        msg: '获取标签列表数据成功',
        data: result
      }
    } else {
      ctx.body = {
        code: -1,
        msg: '获取标签列表数据失败',
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

// 用户关注标签路由
router.post('/follow', checkUser, async (ctx) => {
  const userid = ctx.session.user_id
  const { list } = ctx.request.body
  // 验证是否有要关注的标签
  if (!list || list.length === 0) {
    ctx.body = {
      code: -1,
      msg: '待关注的标签不能为空'
    }
    return false
  }
  try {
    const params = []
    list.forEach(item => {
      params.push({
        id: getGuid(),
        userid: userid,
        labelid: item.id,
        title: item.title
      })
    })
    const removeResult = await LabelFollow.where({
      userid: userid
    }).deleteMany()
    if (!removeResult) {
      ctx.body = {
        code: ERR_OK,
        msg: '关注标签失败'
      }
      return false
    }
    const result = await LabelFollow.insertMany(params)
    if (result) {
      ctx.body = {
        code: ERR_OK,
        msg: '关注标签成功'
      }
    } else {
      ctx.body = {
        code: ERR_OK,
        msg: '关注标签失败'
      }
    }
  } catch (e) {
    ctx.body = {
      code: -1,
      msg: e.message || '服务器异常'
    }
  }
})

// 用户关注标签列表路由
router.get('/follow/list', checkUser, async (ctx) => {
  const userid = ctx.session.user_id
  try {
    const result = await LabelFollow.find({
      userid: userid
    })
    if (result) {
      ctx.body = {
        code: ERR_OK,
        msg: '获取用户关注标签数据成功',
        data: result
      }
    } else {
      ctx.body = {
        code: ERR_OK,
        msg: '获取用户关注标签数据失败',
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
