const Joi = require('joi');

const validateUserPayload = (req, _res, next) => {
  const { error } = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required(),
    role: Joi.string().valid('user', 'admin').required(),
    name: Joi.string().required(),
  }).validate(req.body);
  if (error) return next(error);
  return next();
};

module.exports = validateUserPayload;
