const router = require('express').Router()
const UsersGetController = require('../controller/UsersGetController')
const UsersPostControllers = require('../controller/UsersPostControllers')




router.get('/', UsersGetController)

router.post('/signup', UsersPostControllers)

module.exports = {
  router, path:'/users'
}