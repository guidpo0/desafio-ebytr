require('dotenv').config();
const jwt = require('jsonwebtoken');
const UsersModel = require('../models/UsersModel');
const errorCodes = require('../helpers/errorsCodes');

const create = async ({ userEmail, userPassword, userName }) => {
  const users = await UsersModel.getAll();
  const existingEmail = users.some((user) => user.userEmail === userEmail);
  if (!existingEmail) return errorCodes.INVALID_EMAIL_ERROR;
  return UsersModel.create({ userEmail, userPassword, userName });
};

const createAdmin = async ({
  userEmail, userPassword, userName, userRole,
}) => {
  if (userRole !== 'admin') return errorCodes.USER_NOT_ADMIN_ERROR;
  const users = await UsersModel.getAll();
  const existingEmail = users.some((user) => user.userEmail === userEmail);
  if (!existingEmail) return errorCodes.INVALI_EMAIL_ERROR;
  return UsersModel.createAdmin({ userEmail, userPassword, userName });
};

const login = async ({ userEmail, userPassword }) => {
  const user = await UsersModel.getByEmail(userEmail);
  if (!user) return errorCodes.EMAIL_NOT_FOUND_ERROR;
  if (user.userPassword !== userPassword) return errorCodes.INCORRECT_PASSWORD_ERROR;
  const { JWT_SECRET } = process.env;
  const jwtConfig = {
    expiresIn: '1d',
    algorithm: 'HS256',
  };
  delete user.userPassword;
  return jwt.sign({ data: user }, JWT_SECRET, jwtConfig);
};

const getAll = () => UsersModel.getAll();

const getById = async (id) => {
  const user = await UsersModel.getById(id);
  if (!user) return errorCodes.USER_NOT_FOUND_ERROR;
  return user;
};

const update = async ({
  id, userEmail, userPassword, userName, userId, userRole,
}) => {
  if (userRole !== 'admin' && userId !== id) return errorCodes.USER_NOT_ADMIN_ERROR;
  const user = await UsersModel.getById(id);
  if (!user) return errorCodes.USER_NOT_FOUND_ERROR;
  return UsersModel.update({
    id, userEmail, userPassword, userName,
  });
};

const remove = async ({ id, userId, userRole }) => {
  if (userRole !== 'admin' && userId !== id) return errorCodes.USER_NOT_ADMIN_ERROR;
  const user = await UsersModel.getById(id);
  if (!user) return errorCodes.USER_NOT_FOUND_ERROR;
  return UsersModel.remove(id);
};

module.exports = {
  create,
  createAdmin,
  login,
  getAll,
  getById,
  update,
  remove,
};
