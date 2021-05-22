const AdminsGetController = require('../controller/AdminsGetController')
const AdminMiddleware = require('../middleware/AdminMiddleware')
const AuthMiddleware = require('../middleware/AuthMiddleware')

const router = require('express').Router()
router.use(AuthMiddleware)
router.use(AdminMiddleware)
router.get('/', AdminsGetController)

module.exports = {
  router, path: '/admin'
}