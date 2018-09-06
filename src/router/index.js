const Router = require('koa-router')
const router = new Router()
 
//console.log('testtt ')

router.use('/api', require('./api'))

module.exports = router.routes()
