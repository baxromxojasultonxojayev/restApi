const FilePostController = require('../controller/FilePostController')
const AuthMiddleware = require('../middleware/AuthMiddleware')
const fileupload = require('express-fileupload')

const router = require('express').Router()
router.use(AuthMiddleware)

router.post('/upload', fileupload(), FilePostController)

module.exports = {
  router, path: '/file'
}