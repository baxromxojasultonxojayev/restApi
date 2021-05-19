
const router = require('express').Router()
const HomeGetControlle = require('../controller/HomeGetControlle')

router.get('/', HomeGetControlle)

module.exports = {
  router, path: '/'
}