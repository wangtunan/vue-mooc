import Router from 'koa-router'
import User from '../models/user.js'
import axios from 'axios'
import checkUser from '../middleware/auth.js'
import Log, { initUserLogs } from '../models/log.js'
import { initUserRecharges } from '../models/recharge.js'
import { initUserCoupons } from '../models/coupon.js'
import { initUserBills } from '../models/bill.js'
import { ERR_OK } from '../config.js'
import { getGuid } from '../../src/utils/utils.js'
const router = new Router({
  prefix: '/user'
})

// 用户注册路由
router.post('/register', async (ctx) => {
  const { username, password } = ctx.request.body
  // 校验用户名
  if (!username) {
    ctx.body = {
      code: -1,
      msg: '用户名不能为空'
    }
    return
  }
  // 校验密码
  if (!password) {
    ctx.body = {
      code: -1,
      msg: '密码不能为空'
    }
    return
  }
  // 判断用户是否已存在
  const checkUser = await User.find({
    username
  })
  if (checkUser.length > 0) {
    ctx.body = {
      code: -1,
      msg: '该用户已存在'
    }
    return
  }
  // 判断是否成功写入数据库
  const guid = getGuid()
  const checkRegister = await User.create({
    id: guid,
    username: username,
    password: password,
    nickname: `用户${new Date().getTime()}`
  })
  if (!checkRegister) {
    ctx.body = {
      code: -1,
      msg: '用户注册失败'
    }
    return
  }
  // 判断是否自动登录成功
  try {
    const { status, data: { code, data } } = await axios.post('http://127.0.0.1:4300/user/login', {
      username,
      password
    })
    if (!ctx.session.user_id) {
      ctx.session.user_id = guid
    }
    if (status !== 200 || code !== ERR_OK) {
      ctx.body = {
        code: -1,
        msg: '注册后自动登录失败'
      }
      return
    }
    ctx.body = {
      code: ERR_OK,
      msg: '用户注册成功',
      data: data
    }
  } catch(e) {
    ctx.body = {
      code: -1,
      msg: e.message
    }
  }
})

// 用户登录路由
router.post('/login', async (ctx) => {
  const { username, password } = ctx.request.body
  // 校验用户名
  if (!username) {
    ctx.body = {
      code: -1,
      msg: '用户名不能为空'
    }
    return
  }
  // 校验密码
  if (!password) {
    ctx.body = {
      code: -1,
      msg: '密码不能为空'
    }
    return
  }
  // 判断是否登录成功
  const userInfo = await User.findOne({
    username,
    password
  }).lean()
  if (!userInfo) {
    ctx.body = {
      code: -1,
      msg: '用户登录失败'
    }
  } else {
    ctx.session.user_id = userInfo.id
    initUserLogs(userInfo.id)
    initUserRecharges(userInfo.id)
    initUserCoupons(userInfo.id)
    initUserBills(userInfo.id)
    // 登录成功后，新增一条登录日志
    try {
      const params = {
        id: getGuid(),
        userid: userInfo.id,
        type: {
          text: '账号登陆',
          code: 0
        },
        time: new Date().toISOString().replace('T', ' ').substring(0, 19),
        ip: '192.168.2.102',
        device: 'web',
        city: '广东省广州市'
      }
      await axios.post('http://localhost:4300/log/create', params)
      // 获取最新登录时间
      const lastLoginLog = await Log.find({
        userid: userInfo.id
      }).sort({
        time: 'desc'
      })
      if (lastLoginLog.length > 0) {
        userInfo.lastLoginTime = lastLoginLog[0].time
        userInfo.lastLoginCity = params.city
      } else {
        userInfo.lastLoginTime = ''
        userInfo.lastLoginCity = ''
      }
    } catch (e) {
      userInfo.lastLoginTime = ''
      userInfo.lastLoginCity = ''
      console.log(e.message)
    }
    ctx.body = {
      code: ERR_OK,
      msg: '用户登录成功',
      data: userInfo
    }
  }
})

// 用户退出路由
router.get('/logout', (ctx) => {
  try {
    delete ctx.session.user_id
    ctx.body = {
      code: ERR_OK,
      msg: '用户退出成功'
    }
  } catch (e) {
    ctx.body = {
      code: -1,
      msg: e.message || '用户退出失败'
    }
  }
})

// 获取用户信息
router.get('/info', checkUser, async (ctx) => {
  const userId = ctx.session.user_id
  if (!userId) {
    ctx.body = {
      code: -2,
      msg: '登录信息已过期'
    }
    return
  }
  try {
    const info = await User.findOne({
      id: userId
    })
    if (info) {
      ctx.body = {
        code: ERR_OK,
        msg: '获取用户信息成功',
        data: info
      }
    } else {
      ctx.body = {
        code: -1,
        msg: '获取用户信息失败'
      }
    }
  } catch (e) {
    ctx.body = {
      code: -1,
      msg: e.message || '服务器异常'
    }
  }
})

// 判断用户是否登录
router.get('/check', (ctx) => {
  const userId = ctx.session.user_id
  if (userId) {
    ctx.body = {
      code: ERR_OK,
      msg: '已登录',
      data: true
    }
  } else {
    ctx.body = {
      code: -2,
      msg: '用户未登录',
      data: false
    }
  }
})

// 用户更改账号绑定信息路由
router.post('/update/binds', checkUser, async (ctx) => {
  const userid = ctx.session.user_id
  const { email, phone, password, qq, wechat } = ctx.request.body
  if (!password) {
    ctx.body = {
      code: -1,
      msg: '参数校验失败：密码不能为空'
    }
    return false
  }
  try {
    const result = await User.find({
      id: userid
    }).updateOne({
      email: email,
      password: password,
      phone: phone,
      qq: qq,
      wechat: wechat
    })
    if (result) {
      ctx.body = {
        code: ERR_OK,
        msg: '修改账号绑定信息成功'
      }
    } else {
      ctx.body = {
        code: -1,
        msg: '修改账号绑定信息失败'
      }
    }
  } catch (e) {
    ctx.body = {
      code: -1,
      msg: e.message || '服务器异常'
    }
  }
})

// 用户更改个人信息路由
router.post('/update/info', checkUser, async (ctx) => {
  const userid = ctx.session.user_id
  const { nickname, job, city, sex, signature } = ctx.request.body
  try {
    const result = await User.find({
      id: userid
    }).updateOne({
      nickname,
      job,
      city,
      sex,
      signature
    })
    if (result) {
      ctx.body = {
        code: ERR_OK,
        msg: '修改个人信息成功'
      }
    } else {
      ctx.body = {
        code: -1,
        msg: '修改个人信息失败'
      }
    }
  } catch (e) {
    ctx.body = {
      code: -1,
      msg: '修改个人信息失败'
    }
  }
})


export default router
