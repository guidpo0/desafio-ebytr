const { StatusCodes } = require('http-status-codes');
const errorsCodes = require('../helpers/errorsCodes');

module.exports = (err, _req, res, _next) => {
  if (err.isJoi) {
    const { message } = err.details[0];
    const error = { code: 'invalid_data', message };
    return res.status(StatusCodes.UNPROCESSABLE_ENTITY).json({ err: error });
  }
  if (err.code === 'invalid_token') {
    return res.status(StatusCodes.UNAUTHORIZED).json(err);
  }
  return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(errorsCodes.INTERNAL_SERVER_ERROR);
};
