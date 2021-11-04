const Joi = require('joi');

const validateTasksPayload = (req, _res, next) => {
  const { error } = Joi.array().items(
    Joi.object({
      description: Joi.string().required(),
      state: Joi.string().valid('pendente', 'em andamento', 'pronto').required(),
    }),
  ).validate(req.body);
  if (error) return next(error);
  return next();
};

module.exports = validateTasksPayload;
