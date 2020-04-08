import Router from 'koa-router'
import User from '../models/user.js'
import axios from 'axios'
import { ERR_OK } from '../config.js'
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
    return false
  }
  // 校验密码
  if (!password) {
    ctx.body = {
      code: -1,
      msg: '密码不能为空'
    }
    return false
  }
  // 判断用户是否已存在
  const checkUser = await User.find({
    username,
    password
  })
  if (checkUser.length > 0) {
    ctx.body = {
      code: -1,
      msg: '该用户已存在'
    }
    return false
  }
  // 判断是否成功写入数据库
  const checkRegister = await User.create({
    username: username,
    password: password,
    nickname: `用户${new Date().getTime()}`
  })
  if (!checkRegister) {
    ctx.body = {
      code: -1,
      msg: '用户注册失败'
    }
    return false
  }
  // 判断是否自动登录成功
  const { status, data: { code, data } } = await axios.post('/user/login', {
    username,
    password
  })
  if (status !== 200 || code !== ERR_OK) {
    ctx.body = {
      code: -1,
      msg: '注册后自动登录失败'
    }
    return false
  }
  ctx.body = {
    code: ERR_OK,
    msg: '用户注册成功',
    data: data
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
    return false
  }
  // 校验密码
  if (!password) {
    ctx.body = {
      code: -1,
      msg: '密码不能为空'
    }
    return false
  }
  // 判断是否登录成功
  const userInfo = await User.findOne({
    username,
    password
  })
  if (!userInfo) {
    ctx.body = {
      code: -1,
      msg: '用户登录失败'
    }
  } else {
    ctx.session.user_id = userInfo.id
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
router.get('/info', async (ctx) => {
  const userId = ctx.session.user_id
  if (!userId) {
    ctx.body = {
      code: -2,
      msg: '登录信息已过期'
    }
    return false
  }
  const info = await User.findOne({
    id: userId
  })
  if (!info) {
    ctx.body = {
      code: -1,
      msg: '获取用户信息失败'
    }
  } else {
    ctx.body = {
      code: ERR_OK,
      msg: '获取用户信息成功',
      data: info
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


export default router
