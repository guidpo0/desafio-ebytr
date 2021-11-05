const { StatusCodes } = require('http-status-codes');
const TasksService = require('../services/TasksService');

const create = async (req, res, next) => {
  const { tasks } = req.body;
  const { userId } = req.user;
  const tasksCreated = await TasksService.create(
    { tasks, userId },
  );
  if (tasksCreated.err) return next(tasksCreated.err);
  return res.status(StatusCodes.CREATED).json({ tasks: tasksCreated });
};

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
  return res.status(StatusCodes.OK).json({ tasks });
};

const update = async (req, res, next) => {
  const { id } = req.params;
  const { tasks } = req.body;
  const { userId, userRole } = req.user;
  const tasksUpdated = await TasksService.update({
    id, userId, userRole, tasks,
  });
  if (tasksUpdated.err) return next(tasksUpdated.err);
  return res.status(StatusCodes.OK).json({ tasks: tasksUpdated });
};

module.exports = {
  create,
  // getAll,
  // getAllByUser,
  // update,
};
