const Router = require('koa-router')


const botMessage = require('./botMessage') 
const healthCheck = require('./healthcheck') 


const router = new Router()

router.get('/healthCheck', healthCheck.getHandler )

module.exports = router.routes()
