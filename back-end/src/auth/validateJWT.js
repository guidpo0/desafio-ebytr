require('dotenv').config();
const jwt = require('jsonwebtoken');
const { StatusCodes } = require('http-status-codes');
const UsersModel = require('../models/UsersModel');
const { INVALID_TOKEN_ERROR } = require('../helpers/errorsCodes');

const validateJWT = async (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(StatusCodes.UNAUTHORIZED).json(INVALID_TOKEN_ERROR);
  }
  const secret = process.env.JWT_SECRET;
  const decoded = jwt.verify(token, secret);
  const user = await UsersModel.getById(decoded.data.userId);
  if (!user) return res.status(StatusCodes.UNAUTHORIZED).json(INVALID_TOKEN_ERROR);
  req.user = user;
  return next();
};

module.exports = validateJWT;
