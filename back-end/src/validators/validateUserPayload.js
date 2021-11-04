const Joi = require('joi');

const validateUserPayload = (req, _res, next) => {
  const { error } = Joi.object({
    userEmail: Joi.string().email().required(),
    userPassword: Joi.string().required(),
    userRole: Joi.string().valid('user', 'admin').required(),
    userName: Joi.string().required(),
  }).validate(req.body);
  if (error) return next(error);
  return next();
};

module.exports = validateUserPayload;
