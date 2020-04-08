import Router from 'koa-router'
import Slider from '../models/slider.js'
import Teacher from '../models/teacher.js'
import Student from '../models/student.js'
import { ERR_OK } from '../config.js'
const router = new Router({
  prefix: '/home'
})

// 首页轮播接口
router.get('/slider', async (ctx) => {
  const result = await Slider.find()
  if (result.length > 0) {
    ctx.body = {
      code: ERR_OK,
      msg: '获取首页轮播数据成功',
      data: result
    }
  } else {
    ctx.body = {
      code: -1,
      msg: '获取首页轮播数据失败',
      data: []
    }
  }
})

// 首页精英讲师接口
router.get('/teacher', async (ctx) => {
  const result = await Teacher.find()
  if (result.length > 0) {
    ctx.body = {
      code: ERR_OK,
      msg: '获取首页精英讲师数据成功',
      data: result
    }
  } else {
    ctx.body = {
      code: -1,
      msg: '获取首页精英讲师数据失败',
      data: []
    }
  }
})

// 全明星学员接口
router.get('/student', async (ctx) => {
  const result = await Student.find()
  if (result.length > 0) {
    ctx.body = {
      code: ERR_OK,
      msg: '获取全明星学员数据成功',
      data: result
    }
  } else {
    ctx.body = {
      code: -1,
      msg: '获取全明星学员数据失败',
      data: []
    }
  }
})

export default router