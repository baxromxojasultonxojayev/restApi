const FilePostController = require('../controller/FilePostController')
const AuthMiddleware = require('../middleware/AuthMiddleware')
const fileupload = require('express-fileupload')
const FileGetController = require('../controller/FileGetController')

const router = require('express').Router()
router.use(AuthMiddleware)

router.post('/upload', fileupload(), FilePostController)
router.get('/', FileGetController)

module.exports = {
  router, path: '/file'
}