const BlogGetController = require('../controller/BlogGetController')

const BlogGetOneController = require('../controller/BlogGetOneController')

const router = require('express').Router()

router.get('/all', BlogGetController)

router.get('/:slugify', BlogGetOneController)

module.exports = {
  router, path: '/blog'
}