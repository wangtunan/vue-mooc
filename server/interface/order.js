import Router from 'koa-router'
const router = new Router({
  prefix: '/order'
})

// 订单生产
// router.post('/create', async (ctx) => {
//   const userid = ctx.session.user_id
//   const { list, coupon = 0, way = 0 } = ctx.request.body 
// })

export default router
