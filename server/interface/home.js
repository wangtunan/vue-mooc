import Router from 'koa-router'
import Slider from '../models/slider.js'
import { ERR_OK } from '../config.js'
const router = new Router({
  prefix: '/home'
})

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

export default router