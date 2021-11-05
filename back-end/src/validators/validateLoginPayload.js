const Joi = require('joi');

const validateLoginPayload = (req, _res, next) => {
  const { error } = Joi.object({
    userEmail: Joi.string().email().required(),
    userPassword: Joi.string().min(6).required(),
  }).validate(req.body);
  if (error) return next(error);
  return next();
};

module.exports = validateLoginPayload;
