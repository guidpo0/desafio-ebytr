const Joi = require('joi');

const validateTasksPayload = (req, _res, next) => {
  const { error } = Joi.object({
    tasks: Joi.array().items(
      Joi.object({
        taskDescription: Joi.string().required(),
        taskStatus: Joi.string().valid('pendente', 'em andamento', 'pronto').required(),
      }),
    ),
  }).validate(req.body);
  if (error) return next(error);
  return next();
};

module.exports = validateTasksPayload;
