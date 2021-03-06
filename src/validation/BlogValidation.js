const Joi = require('joi')

module.exports = Joi.object({
  title: Joi.string().min(2).max(512).required(),
  text: Joi.string().min(2).max(5020).required(),
  media_id: Joi.string() 
}) 