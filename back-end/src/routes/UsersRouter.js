const rescue = require('express-rescue');
const express = require('express');
const UsersController = require('../controllers/UsersController');
const ErrorController = require('../controllers/ErrorController');
const validateJWT = require('../auth/validateJWT');
const validateUserPayload = require('../validators/validateUserPayload');
const validateLoginPayload = require('../validators/validateLoginPayload');

const UsersRouter = express.Router();

UsersRouter.post('/', rescue(validateUserPayload), rescue(UsersController.create));

UsersRouter.post(
  '/admin',
  rescue(validateJWT),
  rescue(validateUserPayload),
  rescue(UsersController.createAdmin),
);

UsersRouter.post('/login', rescue(validateLoginPayload), rescue(UsersController.login));

UsersRouter.get('/', rescue(validateJWT), rescue(UsersController.getAll));

UsersRouter.get('/:id', rescue(validateJWT), rescue(UsersController.getById));

UsersRouter.put('/:id', rescue(validateJWT), rescue(UsersController.update));

UsersRouter.delete('/:id', rescue(validateJWT), rescue(UsersController.remove));

UsersRouter.use(ErrorController);

module.exports = UsersRouter;
