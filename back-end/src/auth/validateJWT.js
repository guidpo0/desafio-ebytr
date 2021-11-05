require('dotenv').config();
const jwt = require('jsonwebtoken');
const UsersModel = require('../models/UsersModel');
const { INVALID_TOKEN_ERROR } = require('../helpers/errorsCodes');

const validateJWT = async (req, _res, next) => {
  const token = req.headers.authorization;
  if (!token) return next(INVALID_TOKEN_ERROR.err);
  const secret = process.env.JWT_SECRET;
  const decoded = jwt.verify(token, secret);
  const user = await UsersModel.getById(decoded.data.userId);
  if (!user) return next(INVALID_TOKEN_ERROR.err);
  req.user = user;
  return next();
};

module.exports = validateJWT;
