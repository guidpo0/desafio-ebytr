const { StatusCodes } = require('http-status-codes');
const UsersService = require('../services/UsersService');

const create = async (req, res, next) => {
  const { userEmail, userPassword, userName } = req.body;
  const user = await UsersService.create(
    { userEmail, userPassword, userName },
  );
  if (user.err) return next(user.err);
  return res.status(StatusCodes.CREATED).json(user);
};

const createAdmin = async (req, res, next) => {
  const { userEmail, userPassword, userName } = req.body;
  const { userRole } = req.user;
  const user = await UsersService.createAdmin(
    {
      userEmail, userPassword, userName, userRole,
    },
  );
  if (user.err) return next(user.err);
  return res.status(StatusCodes.CREATED).json(user);
};

const login = async (req, res, next) => {
  const { userEmail, userPassword } = req.body;
  const token = await UsersService.login({ userEmail, userPassword });
  if (token.err) return next(token.err);
  return res.status(StatusCodes.OK).json({ token });
};

const getAll = async (_req, res) => {
  const users = await UsersService.getAll();
  return res.status(StatusCodes.OK).json({ users });
};

const getById = async (req, res, next) => {
  const { id } = req.params;
  const user = await UsersService.getById(id);
  if (user.err) return next(user.err);
  return res.status(StatusCodes.OK).json(user);
};

const update = async (req, res, next) => {
  const { id } = req.params;
  const {
    userEmail, userPassword, userName,
  } = req.body;
  const { userId, userRole } = req.user;
  const userUpdated = await UsersService.update({
    id, userEmail, userPassword, userName, userId, userRole,
  });
  if (userUpdated.err) return next(userUpdated.err);
  return res.status(StatusCodes.OK).json(userUpdated);
};

const remove = async (req, res, next) => {
  const { id } = req.params;
  const { userId, userRole } = req.user;
  const userRemoved = await UsersService.remove({ id, userId, userRole });
  if (userRemoved.err) return next(userRemoved.err);
  return res.status(StatusCodes.OK).json(userRemoved);
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
