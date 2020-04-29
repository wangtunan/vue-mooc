import Router from 'koa-router'
import Lesson from '../models/lesson.js'
import UserLesson from '../models/userLesson.js'
import Catalog from '../models/catalog.js'
import { ERR_OK, SIZE } from '../config.js'
import checkUser from '../middleware/auth.js'
const router = new Router({
  prefix: '/lesson'
})

// 课程列表路由
router.get('/list', async (ctx) => {
  const userid = ctx.session.user_id
  const { 
    page = 1,
    size = SIZE,
    type = 0,
    category = '',
    label = '',
    diff = '',
    sort = ''
  } = ctx.query
  try {
    let where = {
      'type.code': type
    }
    let sortWhere = {}
    // 分类
    if (category || category === 0) {
      where['category.code'] = category
    }
    // 标签
    if (label) {
      where.labels = {
        $elemMatch: {
          $eq: label
        }
      }
    }
    // 难度
    if (diff) {
      where['hard.code'] = +diff
    }
    // 排序放肆
    if (sort) {
      sortWhere[sort] = -1
    }
    const total = await Lesson.find(where).countDocuments()
    const result = await Lesson.find(where).skip((page - 1) * size).limit(+size).sort(sortWhere).lean()
    if (result) {
      // 处理是否购买，是否收藏
      if (+type === 1) {
        for (let index = 0; index < result.length; index++) {
          const isBuyed = await UserLesson.findOne({
            userid: userid,
            lessonid: result[index].id
          })
          result[index]['isBuy'] = !!isBuyed
        }
      }
      ctx.body = {
        code: ERR_OK,
        msg: '获取课程数据成功',
        data: {
          list: result,
          total: total
        }
      }
    } else {
      ctx.body = {
        code: -1,
        msg: '获取课程数据失败',
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

// 课程详情路由
router.get('/info', checkUser, async (ctx) => {
  const { id } = ctx.query
  if (!id) {
    ctx.body = {
      code: -1,
      msg: '缺少关键参数id'
    }
    return false
  }
  try {
    const lessonInfo = await Lesson.findOne({
      id: id
    }).lean()
    const catalog = await Catalog.findOne({
      lessonid: id
    })
    if (lessonInfo && catalog) {
      lessonInfo.catalog = catalog
      ctx.body = {
        code: ERR_OK,
        msg: "获取课程详情数据成功",
        data: lessonInfo
      }
    } else {
      ctx.body = {
        code: -1,
        msg: '获取课程详情失败',
      }
    }
  } catch (e) {
    ctx.body = {
      code: -1,
      msg: e.message || '服务器异常'
    }
  }
})

// 用户课程列表路由
router.get('/user', checkUser, async (ctx) => {
  const userid = ctx.session.user_id
  const { page = 1, size = SIZE } = ctx.query
  try {
    const where = {
      userid
    }
    const total = await UserLesson.find(where).countDocuments()
    const result = await UserLesson.find(where).skip((page - 1) * size).limit(+size)
    if (result) {
      ctx.body = {
        code: ERR_OK,
        msg: '获取用户课程数据成功',
        data: {
          list: result,
          total: total
        }
      }
    } else {
      ctx.body = {
        code: -1,
        msg: '获取用户课程数据失败',
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

export default router
