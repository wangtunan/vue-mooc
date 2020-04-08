import Koa from 'koa'
import json from 'koa-json'
import session from 'koa-session'
import bodyParser from 'koa-bodyparser'
import homeRouter from './interface/home.js'
import commonRouter from './interface/common.js'
import noticeRouter from './interface/notice.js'
import readRouter from './interface/read.js'
import userRouter from './interface/user.js'
import mongoose from 'mongoose'
import dbConfig from './config.js'


const app = new Koa()
const host = process.env.HOST || '127.0.0.1'
const port = process.env.PORT || 4300

// 设置跨域
app.use(async (ctx, next) => {
  ctx.set('Access-Control-Allow-Origin', '*');
  ctx.set('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
  ctx.set('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
  if (ctx.method === 'OPTIONS') {
    ctx.body = 200; 
  } else {
    await next();
  }
});
app.keys = ['vue-mooc-keys']

// 中间件
app.use(bodyParser({
  extendTypes: ['text', 'form', 'json']
}))
app.use(json())
app.use(session({
  prefix: 'mooc',
  key: 'mooc',
  maxAge: 30 * 60 * 1000
}, app))

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

// 启动服务
app.listen(port, () => {
  console.log(`Server listening on http://${host}:${port}`)
})