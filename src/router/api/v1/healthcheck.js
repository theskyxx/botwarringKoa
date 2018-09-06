const getHandler = ctx => {
    ctx.response.status=200 
    ctx.response.body = 'OK'
  }

  module.exports = {
	getHandler
}
