import Router from 'koa-router'
import Lesson from '../models/lesson.js'
import { ERR_OK, SIZE } from '../config.js'
const router = new Router({
  prefix: '/lesson'
})

// 课程列表路由
router.get('/list', async (ctx) => {
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
    const result = await Lesson.find(where).skip((page - 1) * size).limit(+size).sort(sortWhere)
    if (result) {
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

export default router
