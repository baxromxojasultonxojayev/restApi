const router = require('express').Router()
const UsersGetController = require('../controller/UsersGetController')
const UsersLoginPostController = require('../controller/UsersLoginPostController')
const UsersPostControllers = require('../controller/UsersPostControllers')




router.get('/', UsersGetController)

router.post('/signup', UsersPostControllers)
router.post('/login', UsersLoginPostController)

module.exports = {
  router, path:'/users'
}