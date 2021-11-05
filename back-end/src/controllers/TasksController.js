const { StatusCodes } = require('http-status-codes');
const TasksService = require('../services/TasksService');

const getAll = async (req, res, next) => {
  const { userRole } = req.user;
  const tasks = await TasksService.getAll(userRole);
  if (tasks.err) return next(tasks.err);
  return res.status(StatusCodes.OK).json({ tasks });
};

const getAllByUser = async (req, res, next) => {
  const { id } = req.params;
  const { userId, userRole } = req.user;
  const tasks = await TasksService.getAllByUser({ id, userId, userRole });
  if (tasks.err) return next(tasks.err);
  return res.status(StatusCodes.OK).json(tasks);
};

const update = async (req, res, next) => {
  const { id } = req.params;
  const { tasks } = req.body;
  const { userId, userRole } = req.user;
  const tasksUpdated = await TasksService.update({
    id, userId, userRole, tasks,
  });
  if (tasksUpdated.err) return next(tasksUpdated.err);
  return res.status(StatusCodes.OK).json(tasksUpdated);
};

module.exports = {
  getAll,
  getAllByUser,
  update,
};
