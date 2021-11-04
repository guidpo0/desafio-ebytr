const rescue = require('express-rescue');
const express = require('express');
const UsersController = require('../controllers/UsersController');
const ErrorController = require('../controllers/ErrorController');
const validateJWT = require('../auth/validateJWT');
const validateUser = require('../validators/validateUser');

const UsersRouter = express.Router();

UsersRouter.post('/', rescue(validateUser), rescue(UsersController.create));

UsersRouter.post(
  '/admin',
  rescue(validateJWT),
  rescue(validateUser),
  rescue(UsersController.create),
);

UsersRouter.post('/login', rescue(validateUser), rescue(UsersController.create));

UsersRouter.get('/', rescue(UsersController.getAll));

UsersRouter.get('/:id', rescue(UsersController.getById));

UsersRouter.put('/:id', rescue(validateJWT), rescue(UsersController.update));

UsersRouter.delete('/:id', rescue(validateJWT), rescue(UsersController.remove));

UsersRouter.use(ErrorController);

module.exports = UsersRouter;
