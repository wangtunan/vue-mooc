import Router from 'koa-router'
import Slider from '../models/slider.js'
import Teacher from '../models/teacher.js'
import Student from '../models/student.js'
import Navigation from '../models/navigation.js'
import Label from '../models/label.js'
import Lesson from '../models/lesson.js'
import { ERR_OK } from '../config.js'
const router = new Router({
  prefix: '/home'
})

// 首页轮播接口
router.get('/slider', async (ctx) => {
  try {
    const result = await Slider.find()
    if (result) {
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
  } catch (e) {
    ctx.body = {
      code: -1,
      msg: e.message || '服务器异常'
    }
  }
})

// 首页导航接口
router.get('/nav', async (ctx) => {
  try {
    const labelList = await Label.find()
    const navList = await Navigation.find().sort({
      sort: 1
    }).lean()
    if (!labelList || !navList) {
      ctx.body = {
        code: -1,
        msg: '获取首页导航数据失败',
        data: []
      }
      return false
    }
    let LabelNormalizeList = []
    for (let index = 0; index < labelList.length; index++) {
      const label = labelList[index]
      const findIndex = LabelNormalizeList.findIndex(item => item.code === label.type.code)
      if (findIndex === -1) {
        LabelNormalizeList.push({
          title: label.type.text,
          code: label.type.code,
          list: [label.title]
        })
      } else {
        LabelNormalizeList[findIndex].list.push(label.title)
      }
    }
    for (let index = 0; index < navList.length; index++) {
      const nav = navList[index]
      const splitCodeArr = nav.code.split(',')
      splitCodeArr.forEach(code => {
        const findIndex = LabelNormalizeList.findIndex(item => +item.code === +code)
        if (findIndex !== -1) {
          if (!navList[index].hasOwnProperty('tags')) {
            navList[index]['tags'] = [LabelNormalizeList[findIndex]]
          } else {
            navList[index]['tags'].push(LabelNormalizeList[findIndex])
          }
        }
      })
      if (!navList[index].hasOwnProperty('lessons')) {
        navList[index]['lessons'] = await Lesson.find({ 
          'type.code': 1,
          'category.code': {
            $in: splitCodeArr
          }
        }).limit(4)
      }
    }
    ctx.body = {
      code: ERR_OK,
      msg: '获取首页导航数据成功',
      data: navList
    }
  } catch (e) {
    ctx.body = {
      code: -1,
      msg: e.message || '服务器异常'
    }
  }
})

// 首页课程
router.get('/lesson', async (ctx) => {
  try {
    const where = {
      'type.code': 1
    }
    // 推荐课程
    const recommendList = await Lesson.find(where).sort({ persons: -1 }).limit(5)
    // 新上好课
    const newList = await Lesson.find(where).sort({ time: -1 }).limit(10)
    // 新手入门
    const easyList = await Lesson.find({ 'hard.code': 0 }).limit(10)
    // 技能提升
    const improveList = await Lesson.find({
      'hard.code': {
        $gte: 2
      }
    }).limit(10)
    // 前沿技术
    const advancedList = await Lesson.find({ 'category.code': 4 }).limit(10)
    if (advancedList) {
      ctx.body = {
        code: ERR_OK,
        msg: '获取首页课程成功',
        data: {
          recommend: recommendList,
          new: newList,
          easy: easyList,
          improve: improveList,
          advanced: advancedList
        }
      }
    } else {
      ctx.body = {
        code: -1,
        msg: '获取首页课程失败',
        data: {
          recommend: [],
          new: [],
          easy: [],
          improve: [],
          advanced: []
        }
      }
    }
  } catch (e) {
    ctx.body = {
      code: -1,
      msg: '获取首页课程数据失败',
      data: {
        recommend: [],
        new: [],
        easy: [],
        improve: [],
        advanced: []
      }
    }
  }
})

// 首页精英讲师接口
router.get('/teacher', async (ctx) => {
  try {
    const result = await Teacher.find()
    if (result) {
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
  } catch (e) {
    ctx.body = {
      code: -1,
      msg: e.message || '服务器异常'
    }
  }
})

// 全明星学员接口
router.get('/student', async (ctx) => {
  try {
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
  } catch (e) {
    ctx.body = {
      code: -1,
      msg: e.message || '服务器异常'
    }
  }
})

export default router