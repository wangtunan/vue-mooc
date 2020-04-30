import Koa from 'koa'
import json from 'koa-json'
import session from 'koa-session'
import bodyParser from 'koa-bodyparser'
import homeRouter from './interface/home.js'
import commonRouter from './interface/common.js'
import noticeRouter from './interface/notice.js'
import readRouter from './interface/read.js'
import userRouter from './interface/user.js'
import logRouter from './interface/log.js'
import addressRouter from './interface/address.js'
import integralRouter from './interface/integral.js'
import rechargeRouter from './interface/recharge.js'
import couponRouter from './interface/coupon.js'
import labelRouter from './interface/label.js'
import billRouter from './interface/bill.js'
import questionRouter from './interface/question.js'
import articleRouter from './interface/article.js'
import lessonRouter from './interface/lesson.js'
import cartRouter from './interface/cart.js'
import orderRouter from './interface/order.js'
import userLessonRouter from './interface/userLesson.js'
import mongoose from 'mongoose'
import dbConfig from './config.js'


const app = new Koa()
const host = process.env.HOST || '127.0.0.1'
const port = process.env.PORT || 4300

// 设置跨域
app.use(async (ctx, next) => {
  ctx.set('Access-Control-Allow-Origin', '*')
  ctx.set('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild')
  ctx.set('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS')
  ctx.set('Access-Control-Allow-Credentials', true)
  if (ctx.method === 'OPTIONS') {
    ctx.body = 200; 
  } else {
    await next();
  }
})
app.keys = ['vue-mooc-keys']

// 中间件
app.use(session({
  prefix: 'mooc',
  key: 'mooc',
  rolling: true,
  maxAge: 24 * 60 * 60 * 1000
}, app))
app.use(bodyParser())
app.use(json())


// 链接mongodb
mongoose.connect(dbConfig.dbs, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true
})
// 路由
app.use(homeRouter.routes(), homeRouter.allowedMethods())
app.use(commonRouter.routes(), commonRouter.allowedMethods())
app.use(noticeRouter.routes(), noticeRouter.allowedMethods())
app.use(readRouter.routes(), readRouter.allowedMethods())
app.use(userRouter.routes(), userRouter.allowedMethods())
app.use(logRouter.routes(), logRouter.allowedMethods())
app.use(addressRouter.routes(), addressRouter.allowedMethods())
app.use(integralRouter.routes(), integralRouter.allowedMethods())
app.use(rechargeRouter.routes(), rechargeRouter.allowedMethods())
app.use(couponRouter.routes(), couponRouter.allowedMethods())
app.use(labelRouter.routes(), labelRouter.allowedMethods())
app.use(billRouter.routes(), billRouter.allowedMethods())
app.use(questionRouter.routes(), questionRouter.allowedMethods())
app.use(articleRouter.routes(), articleRouter.allowedMethods())
app.use(lessonRouter.routes(), lessonRouter.allowedMethods())
app.use(cartRouter.routes(), cartRouter.allowedMethods())
app.use(orderRouter.routes(), orderRouter.allowedMethods())
app.use(userLessonRouter.routes(), userLessonRouter.allowedMethods())

// 启动服务
app.listen(port, () => {
  console.log(`Server listening on http://${host}:${port}`)
})