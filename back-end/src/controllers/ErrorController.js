const { StatusCodes } = require('http-status-codes');
const errorsCodes = require('../helpers/errorsCodes');

const unauthorizedCodes = [
  'invalid_token',
  'user_not_admin',
  'password_incorrect',
];

const notFoundCodes = [
  'email_not_found',
  'user_not_found',
];

module.exports = (err, _req, res, _next) => {
  if (err.isJoi) {
    const { message } = err.details[0];
    const error = { code: 'invalid_data', message };
    return res.status(StatusCodes.UNPROCESSABLE_ENTITY).json({ err: error });
  }
  if (err.name) {
    return res.status(StatusCodes.UNAUTHORIZED).json(errorsCodes.INVALID_TOKEN_ERROR);
  }
  if (unauthorizedCodes.includes(err.code)) {
    return res.status(StatusCodes.UNAUTHORIZED).json(err);
  }
  if (notFoundCodes.includes(err.code)) {
    return res.status(StatusCodes.NOT_FOUND).json(err);
  }
  return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(errorsCodes.INTERNAL_SERVER_ERROR);
};
