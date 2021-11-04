const rescue = require('express-rescue');
const express = require('express');
const TasksController = require('../controllers/TasksController');
const ErrorController = require('../controllers/ErrorController');
const validateJWT = require('../auth/validateJWT');
const validateTasksPayload = require('../validators/validateTasksPayload');

const TasksRouter = express.Router();

TasksRouter.post(
  '/',
  rescue(validateJWT),
  rescue(validateTasksPayload),
  rescue(TasksController.create),
);

TasksRouter.get('/', rescue(validateJWT), rescue(TasksController.getAll));

TasksRouter.get('/:id', rescue(validateJWT), rescue(TasksController.getById));

TasksRouter.put('/:id', rescue(validateJWT), rescue(TasksController.update));

TasksRouter.delete('/:id', rescue(validateJWT), rescue(TasksController.remove));

TasksRouter.use(ErrorController);

module.exports = TasksRouter;
