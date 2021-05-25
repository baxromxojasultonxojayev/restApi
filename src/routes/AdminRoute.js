const AdminsGetController = require('../controller/AdminsGetController')
const BlogCreatePostController = require('../controller/BlogCreatePostController')
const AdminMiddleware = require('../middleware/AdminMiddleware')
const AuthMiddleware = require('../middleware/AuthMiddleware')

const router = require('express').Router()
router.use(AuthMiddleware)
router.use(AdminMiddleware)


router.get('/', AdminsGetController)
router.post('/blog/create', BlogCreatePostController)


module.exports = {
  router, path: '/admin'
}