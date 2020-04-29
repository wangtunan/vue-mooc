const checkUser = async (ctx, next) => {
  if (ctx.session.user_id) {
    await next()
  } else {
    ctx.body = {
      code: 401,
      msg: '用户未登陆或用户信息已过期'
    }
  }
}
export default checkUser
