const Joi = require('joi')

module.exports = Joi.object({
  name: Joi.string().required().min(3).max(30),
  password: Joi.string().required().min(5).max(30) 
}) 