const router = require('express').Router()
const UsersDeleteAllSessionController = require('../controller/UsersDeleteAllSessionController')
const UsersDeleteSessionControlle = require('../controller/UsersDeleteSessionControlle')
const UsersGetController = require('../controller/UsersGetController')
const UsersGetSessionControlle = require('../controller/UsersGetSessionControlle')
const UsersLoginPostController = require('../controller/UsersLoginPostController')
const UsersPostControllers = require('../controller/UsersPostControllers')

const AuthMiddleware = require('../middleware/AuthMiddleware')





router.get('/', UsersGetController)

router.post('/signup', UsersPostControllers)
router.post('/login', UsersLoginPostController)
router.get('/session', AuthMiddleware, UsersGetSessionControlle)
router.delete('/session/deleteAll', AuthMiddleware, UsersDeleteAllSessionController)
router.delete('/session/:id', AuthMiddleware, UsersDeleteSessionControlle)

module.exports = {
  router, path:'/users'
}