const Joi = require('joi')

module.exports = Joi.object({
  id: Joi.string().required(),
  password: Joi.string().required().min(5).max(30) 
}) 