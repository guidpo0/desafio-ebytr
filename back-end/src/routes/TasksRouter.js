const rescue = require('express-rescue');
const express = require('express');
const TasksController = require('../controllers/TasksController');
const ErrorController = require('../controllers/ErrorController');
const validateJWT = require('../auth/validateJWT');
const validateTasksPayload = require('../validators/validateTasksPayload');

const TasksRouter = express.Router();

TasksRouter.post(
  '/user/:id',
  // rescue(validateJWT),
  rescue(validateTasksPayload),
  rescue(TasksController.create),
);

// TasksRouter.get('/', rescue(validateJWT), rescue(TasksController.getAll));

// TasksRouter.get('/user/:id', rescue(validateJWT), rescue(TasksController.getAllByUser));

// TasksRouter.put('/user/:id', rescue(validateJWT), rescue(TasksController.update));

TasksRouter.use(ErrorController);

module.exports = TasksRouter;
