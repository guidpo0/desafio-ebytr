const TasksModel = require('../models/TasksModel');
const UsersModel = require('../models/UsersModel');
const errorCodes = require('../helpers/errorsCodes');

const create = async ({ tasks, userId }) => {
  const user = await UsersModel.getById(userId);
  if (!user) return errorCodes.USER_NOT_FOUND_ERROR;
  return TasksModel.create({ tasks, userId });
};

const getAll = async (userRole) => {
  if (userRole !== 'admin') return errorCodes.USER_NOT_ADMIN_ERROR;
  return TasksModel.getAll();
};

const getAllByUser = async ({ id, userId, userRole }) => {
  if (userRole !== 'admin' && userId !== id) return errorCodes.USER_NOT_ADMIN_ERROR;
  const user = await UsersModel.getById(id);
  if (!user) return errorCodes.USER_NOT_FOUND_ERROR;
  return TasksModel.getAllByUser(id);
};

const update = async ({
  id, userId, userRole, tasks,
}) => {
  if (userRole !== 'admin' && userId !== id) return errorCodes.USER_NOT_ADMIN_ERROR;
  const user = await UsersModel.getById(id);
  if (!user) return errorCodes.USER_NOT_FOUND_ERROR;
  return TasksModel.update({ id, tasks });
};

module.exports = {
  create,
  getAll,
  getAllByUser,
  update,
};
